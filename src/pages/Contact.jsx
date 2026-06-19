import React, { useRef, useState } from "react";
import "../css/contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [validationError, setValidationError] = useState("");

  // OTP Verification States
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [userEnteredOtp, setUserEnteredOtp] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [otpError, setOtpError] = useState("");

  // Custom Alert Popup State
  const [alertConfig, setAlertConfig] = useState({ isOpen: false, title: "", message: "", type: "info" });

  const showAlert = (message, title = "Notification", type = "info") => {
    setAlertConfig({ isOpen: true, title, message, type });
  };

  const closeAlert = () => {
    setAlertConfig({ isOpen: false, title: "", message: "", type: "info" });
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const DISPOSABLE_DOMAINS = [
    "mailinator.com", "yopmail.com", "tempmail.com", "10minutemail.com",
    "dispostable.com", "getairmail.com", "guerrillamail.com", "sharklasers.com",
    "guerrillamailblock.com", "guerrillamail.net", "guerrillamail.org",
    "guerrillamail.biz", "grr.la", "guerrillamail.de", "trashmail.com",
    "generator.email", "throwawaymail.com", "maildrop.cc", "tempmailo.com",
    "temp-mail.org", "fakeinbox.com", "mintemail.com", "disposablemail.com",
    "mailnesia.com", "mailcatch.com", "burnmailer.com", "inboxkitten.com"
  ];

  const performLocalCheck = (emailVal) => {
    if (!emailRegex.test(emailVal)) {
      return { valid: false, message: "Please enter a valid email format." };
    }
    const domain = emailVal.split("@")[1]?.toLowerCase();
    if (DISPOSABLE_DOMAINS.includes(domain)) {
      return { valid: false, message: "Temporary or disposable email addresses are not allowed." };
    }
    return { valid: true };
  };

  const verifyEmail = async (emailVal) => {
    const localResult = performLocalCheck(emailVal);
    if (!localResult.valid) {
      return localResult;
    }

    const apiKey = process.env.REACT_APP_ABSTRACT_API_KEY;
    if (!apiKey) {
      console.warn("REACT_APP_ABSTRACT_API_KEY is not defined. Using local fallback check.");
      return { valid: true }; // Local check passed
    }

    try {
      const response = await fetch(
        `https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${encodeURIComponent(emailVal)}`
      );
      if (!response.ok) {
        throw new Error(`API returned status ${response.status}`);
      }
      const data = await response.json();
      
      if (data.is_valid_format?.value === false) {
        return { valid: false, message: "The email address has an invalid format." };
      }
      if (data.is_disposable_email?.value === true) {
        return { valid: false, message: "Temporary or disposable emails are not allowed." };
      }
      if (data.is_mx_found?.value === false) {
        return { valid: false, message: "The email domain does not exist or cannot receive mail." };
      }
      if (data.deliverability === "UNDELIVERABLE") {
        return { valid: false, message: "This email address is undeliverable." };
      }

      return { valid: true };
    } catch (err) {
      console.warn("Email validation API error, using local fallback validation:", err);
      return { valid: true };
    }
  };

  const handleSendOtp = async () => {
    setValidationError("");
    setOtpError("");

    if (!name || !email) {
      showAlert("Please fill in your name and email to proceed with verification.", "Error", "error");
      return;
    }

    setIsValidating(true);
    setIsSendingOtp(true);
    const verification = await verifyEmail(email);
    setIsValidating(false);

    if (!verification.valid) {
      setValidationError(verification.message);
      setIsSendingOtp(false);
      return;
    }

    // Generate random 6-digit OTP code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setOtpCode(code);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_kubxz5s";
    const otpTemplateId = process.env.REACT_APP_EMAILJS_OTP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "fuiPBIeol6D2d-WNC";

    if (!otpTemplateId) {
      // Developer mode helper so they can test before creating a template on dashboard
      console.log("----------------------------------------");
      console.log(`[OTP Verification Code]: ${code}`);
      console.log("----------------------------------------");
      showAlert(
        "REACT_APP_EMAILJS_OTP_TEMPLATE_ID is not configured in .env.\n\n[DEVELOPER MODE]: The OTP verification code is logged to your Developer Console for testing!",
        "Developer Mode",
        "warning"
      );
      setIsOtpSent(true);
      setIsSendingOtp(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        otpTemplateId,
        {
          user_name: name,
          user_email: email,
          otp: code,
          passcode: code,
        },
        publicKey
      );
      showAlert(`A verification code has been sent to ${email}. Please check your inbox!`, "OTP Sent", "success");
      setIsOtpSent(true);
    } catch (error) {
      console.error("Failed to send OTP:", error);
      showAlert(
        `Failed to send verification email: ${error.text || error.message || "Unknown error"}. Please make sure your EmailJS account is connected.`,
        "Error",
        "error"
      );
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleVerifyOtp = () => {
    if (userEnteredOtp.trim() === otpCode) {
      setIsEmailVerified(true);
      setOtpError("");
      showAlert("Email verified successfully! You can now send your message.", "Verified", "success");
    } else {
      setOtpError("Incorrect verification code. Please try again.");
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setValidationError("");

    if (!name || !email || !msg) {
      showAlert("Please fill out all the fields.", "Warning", "warning");
      return;
    }

    if (!isEmailVerified) {
      showAlert("Please verify your email address before sending the message.", "Warning", "warning");
      return;
    }

    setIsSending(true);
    
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_kubxz5s";
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_ik7qq8j";
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "fuiPBIeol6D2d-WNC";

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          showAlert("Message sent successfully!", "Success", "success");
          setName("");
          setEmail("");
          setMsg("");
          setIsEmailVerified(false);
          setIsOtpSent(false);
          setOtpCode("");
          setUserEnteredOtp("");
          const homeEl = document.getElementById('home');
          if (homeEl) {
            homeEl.scrollIntoView({ behavior: 'smooth' });
          }
        },
        (error) => {
          console.error(error.text);
          setIsSending(false);
          showAlert(
            `Failed to send message: ${error.text || "Please reconnect your EmailJS account."}`,
            "Error",
            "error"
          );
        }
      );
  };

  return (
    <div className="contact" id="contact" style={{ paddingTop: "80px" }}>
      <h3 style={{ paddingTop: "60px" }}>Connect with me by filling out this form...</h3>
      <br />
      <form ref={form} onSubmit={sendEmail} className="contact-container">
        <label htmlFor="user_name">Your name</label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          value={name}
          disabled={isValidating || isSending || isSendingOtp}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
        <label htmlFor="user_email">Your Email</label>
        <div className="email-input-wrapper">
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={email}
            className={`${validationError ? "input-error" : ""} ${isEmailVerified ? "input-verified" : ""}`}
            disabled={isValidating || isSending || isSendingOtp || isEmailVerified}
            onChange={(e) => {
              setEmail(e.target.value);
              if (validationError) setValidationError("");
            }}
            required
          />
          {isEmailVerified ? (
            <div className="verified-container">
              <span className="verified-badge">Verified ✓</span>
              <button 
                type="button" 
                className="change-email-btn"
                onClick={() => {
                  setIsEmailVerified(false);
                  setIsOtpSent(false);
                  setOtpCode("");
                  setUserEnteredOtp("");
                }}
              >
                Change
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="verify-btn"
              disabled={!name || !email || isValidating || isSending || isSendingOtp}
              onClick={handleSendOtp}
            >
              {isSendingOtp ? "Sending..." : isOtpSent ? "Resend" : "Verify"}
            </button>
          )}
        </div>
        {validationError && (
          <span className="validation-error-msg">{validationError}</span>
        )}

        {isOtpSent && !isEmailVerified && (
          <div className="otp-container">
            <label htmlFor="otp_code">Enter 6-digit Code sent to {email}</label>
            <div className="otp-input-wrapper">
              <input
                type="text"
                id="otp_code"
                placeholder="XXXXXX"
                value={userEnteredOtp}
                disabled={isSending || isSendingOtp}
                onChange={(e) => {
                  setUserEnteredOtp(e.target.value);
                  if (otpError) setOtpError("");
                }}
                required
              />
              <button
                type="button"
                className="confirm-otp-btn"
                disabled={isSending || isSendingOtp || !userEnteredOtp}
                onClick={handleVerifyOtp}
              >
                Verify Code
              </button>
            </div>
            {otpError && <span className="validation-error-msg">{otpError}</span>}
          </div>
        )}

        <label htmlFor="message">What are you looking for?</label>
        <textarea
          id="message"
          name="message"
          className="message"
          value={msg}
          disabled={isValidating || isSending || isSendingOtp}
          onChange={(e) => setMsg(e.target.value)}
          required
        />
        
        <button 
          type="submit" 
          className="submit-btn" 
          disabled={!isEmailVerified || isSending || isValidating || isSendingOtp}
        >
          {isValidating ? (
            <span className="btn-content">
              <span className="spinner"></span> Verifying email...
            </span>
          ) : isSending ? (
            <span className="btn-content">
              <span className="spinner"></span> Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      {/* Custom Alert Modal Popup */}
      {alertConfig.isOpen && (
        <div className="custom-alert-overlay">
          <div className={`custom-alert-box ${alertConfig.type}`}>
            <h4>{alertConfig.title}</h4>
            <p>{alertConfig.message}</p>
            <button type="button" className="custom-alert-btn" onClick={closeAlert}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
