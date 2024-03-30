import React, { useRef, useState } from "react";
import "../css/contact.css";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (name && email && msg) {
      emailjs
        .sendForm(
          "service_kubxz5s",
          "template_ik7qq8j",
          form.current,
          "fuiPBIeol6D2d-WNC"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      navigate("/");
      window.alert("Message sent");
    } else {
      window.alert("Please fill out all the fields");
    }
  };

  return (
    <div className="contact">
      <h3>Connect with me by filling out this form...</h3>
      <br />
      <form ref={form} onSubmit={sendEmail} className="contact-container">
        <label>Your name</label>
        <input
          type="text"
          name="user_name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <label>Your Email</label>
        <input
          type="email"
          name="user_email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <label>What are you looking for?</label>
        <textarea
          name="message"
          className="message"
          onChange={(e) => {
            setMsg(e.target.value);
          }}
        />
        <input type="submit" value="Send" className="submit-btn" />
      </form>
    </div>
  );
}

export default Contact;
