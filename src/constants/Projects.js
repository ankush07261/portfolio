import drumKit from "../assets/images/MyWork-SS/drumKit.png";
import simonGame from "../assets/images/MyWork-SS/simonGame.png";
import todoList from "../assets/images/MyWork-SS/todoList.png";
import blogWebsite from "../assets/images/MyWork-SS/BlogPage.png";
import weatherAPI from "../assets/images/MyWork-SS/weatherAPI.png";
import React_crud from "../assets/images/MyWork-SS/Redux-CRUD.png";
import randomQuote from "../assets/images/MyWork-SS/quoteGen.png";
import imgCarousel from "../assets/images/MyWork-SS/imgCarousel.png";
import TempBMI from "../assets/images/MyWork-SS/TempBMI.png";
import DBMS from "../assets/images/MyWork-SS/DBMS.png";
import PasswordStrength from "../assets/images/MyWork-SS/password.png";
import Keylogger from "../assets/images/MyWork-SS/keylogger.png";
import PortScanner from "../assets/images/MyWork-SS/portscanner.png";
import PasswordCracker from "../assets/images/MyWork-SS/passwordcracker.png"

export const demoprojects = [
  {
    image: weatherAPI,
    title: "Weather web application",
    description: "Built using ReactJS and the open weather API",
    gitURL: "https://github.com/ankush07261/Weather-application",
    liveURL: "https://ankush-weather-application.netlify.app/",
  },
  {
    image: blogWebsite,
    title: "Blog web application",
    description: "Built using MongoDB, ExpressJS, EJS and Bootstrap.",
    gitURL: "https://github.com/ankush07261/Blog-web-app",
  },
  {
    image: todoList,
    title: "To-Do List",
    description: "Built using MongoDB, ExpressJS and EJS.",
    gitURL: "https://github.com/ankush07261/To-Do-List",
  },
  {
    image: DBMS,
    title: "College clubs management",
    description: "Built using MySQL, ExpressJS and EJS.",
    gitURL: "https://github.com/ankush07261/DBMS_mini_project",
  },
  {
    image: React_crud,
    title: "User management system",
    description: "Built using Redux in reactJS.",
    gitURL: "https://github.com/ankush07261/Redux-CRUD",
    liveURL: "https://ankush-redux-crud.netlify.app/",
  },
  {
    image: randomQuote,
    title: "Random Quote Generator",
    description: "Built using ReactJS and type.fit API",
    gitURL: "https://github.com/ankush07261/random-quote-generator",
    liveURL: "https://quote-reactjs.netlify.app/",
  },
  {
    image: imgCarousel,
    title: "Image carousel",
    description: "Built using Hooks in ReactJS.",
    gitURL: "https://github.com/ankush07261/image-carousel",
    liveURL: "https://ankush-img-carousel.netlify.app",
  },
  {
    image: drumKit,
    title: "Drum Kit",
    description:
      "Built using HTML5, CSS3 and JavaScript. It produces the respective drum sound on click or by pressing the keys.",
    gitURL: "https://github.com/ankush07261/Drum-Kit",
    liveURL: "https://drum-kit-ankush.netlify.app/",
  },
  {
    image: TempBMI,
    title: "Temperature and BMI",
    description: "Built using HTML5, CSS3 and JavaScript",
    gitURL: "https://github.com/ankush07261/Temperature-BMI/",
    liveURL: "https://ankush07261.github.io/Temperature-BMI/",
  },
  {
    image: simonGame,
    title: "Simon game",
    description: "A memory game built using HTML5, CSS3 and JavaScript.",
    gitURL: "https://github.com/ankush07261/Simon-game",
    liveURL: "https://ankush07261.github.io/Simon-game/",
  },
];

export const demoCyber = [
  {
    image: PasswordStrength,
    title: "Password strength checker",
    description: "Checks the strength of the entered password.",
    gitURL:
      "https://github.com/ankush07261/Cybersecurity/blob/main/basicPasswordStrength.py",
  },
  {
    image: Keylogger,
    title: "Key logger",
    description: "A tool to capture key press ( educational purpose )",
    gitURL:
      "https://github.com/ankush07261/Cybersecurity/blob/main/keyLogger.py",
  },
  // {
  //   image: PasswordCracker,
  //   title: "Password cracker",
  //   description: "Decrypts the input hashed password and compares it with the words in a list of words in the specified text file.",
  //   gitURL:
  //     "",
  // },
  {
    image: PortScanner,
    title: "Vulnerability scanner",
    description: "Scans for open ports on your computer",
    gitURL:
      "https://github.com/ankush07261/Cybersecurity/blob/main/vulnerabilityScanner.py",
  },
];
