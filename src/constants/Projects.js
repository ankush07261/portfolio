import drumKit from "../assets/images/MyWork-SS/drumKit.png";
import simonGame from "../assets/images/MyWork-SS/simonGame.png";
import todoList from "../assets/images/MyWork-SS/todoList.png";
import blogWebsite from "../assets/images/MyWork-SS/BlogPage.png";
import weatherAPI from "../assets/images/MyWork-SS/weatherAPI.png";
import DBMS from "../assets/images/MyWork-SS/DBMS.png";
import PasswordStrength from "../assets/images/MyWork-SS/password.png";
import Keylogger from "../assets/images/MyWork-SS/keylogger.png";
import PortScanner from "../assets/images/MyWork-SS/portscanner.png";
import File_Cache from "../assets/images/MyWork-SS/File_Cache.png";
// import React_crud from "../assets/images/MyWork-SS/Redux-CRUD.png";
// import randomQuote from "../assets/images/MyWork-SS/quoteGen.png";
// import imgCarousel from "../assets/images/MyWork-SS/imgCarousel.png";
// import TempBMI from "../assets/images/MyWork-SS/TempBMI.png";
// import PasswordCracker from "../assets/images/MyWork-SS/passwordcracker.png"

export const programming = [
  {
    image: File_Cache,
    title: "File management with Caching",
    description: "Optimized file management using caching.",
    gitURL:
      "https://github.com/ankush07261/Cpp-projects/tree/main/FileManageWithCache",
    concepts: ["System design", "C++", "OOPS", "Singleton instance", "Caching"],
  },
  {
    image: weatherAPI,
    title: "Weather web application",
    description:
      "This application shows the current weather of the entered place.",
    gitURL: "https://github.com/ankush07261/Weather-application",
    liveURL: "https://ankush-weather-application.netlify.app/",
    concepts: ["API integration", "ReactJS", "CSS"],
  },
  {
    image: DBMS,
    title: "College clubs management",
    description:
      "Used to manange the members, account, logistics and more of the student clubs in a college",
    gitURL: "https://github.com/ankush07261/DBMS_mini_project",
    concepts: ["SQL", "ExpressJS", "EJS", "CSS"],
  },
  {
    image: blogWebsite,
    title: "Blog web application",
    description: "Can be used to post, view, edit and delete blogs.",
    gitURL: "https://github.com/ankush07261/Blog-web-app",
    concepts: ["MongoDB", "ExpressJS", "EJS", "CSS"],
  },
  {
    image: todoList,
    title: "To-Do List",
    description: "Use it to manage your everyday tasks.",
    gitURL: "https://github.com/ankush07261/To-Do-List",
    concepts: ["MongoDB", "ExpressJS", "EJS", "CSS"],
  },
  {
    image: drumKit,
    title: "Drum Kit",
    description:
      "Produces the respective drum sound on click or by pressing the keys.",
    gitURL: "https://github.com/ankush07261/Drum-Kit",
    liveURL: "https://drum-kit-ankush.netlify.app/",
    concepts: ["Javascript", "HTML", "CSS"],
  },
  // {
  //   image: TempBMI,
  //   title: "Temperature and BMI",
  //   description: "Built using HTML5, CSS3 and JavaScript",
  //   gitURL: "https://github.com/ankush07261/Temperature-BMI/",
  //   liveURL: "https://ankush07261.github.io/Temperature-BMI/",
  // },
  {
    image: simonGame,
    title: "Simon game",
    description: "A memory game.",
    gitURL: "https://github.com/ankush07261/Simon-game",
    liveURL: "https://simon-game-ankush.netlify.app/",
    concepts: ["Javascript", "HTML", "CSS"],
  },
];

// export const demoprojects = [
  
  
//   {
//     image: React_crud,
//     title: "User management system",
//     description: "Built using Redux in reactJS.",
//     gitURL: "https://github.com/ankush07261/Redux-CRUD",
//     liveURL: "https://ankush-redux-crud.netlify.app/",
//   },
//   {
//     image: randomQuote,
//     title: "Random Quote Generator",
//     description: "Built using ReactJS and type.fit API",
//     gitURL: "https://github.com/ankush07261/random-quote-generator",
//     liveURL: "https://quote-reactjs.netlify.app/",
//   },
//   // {
//   //   image: imgCarousel,
//   //   title: "Image carousel",
//   //   description: "Built using Hooks in ReactJS.",
//   //   gitURL: "https://github.com/ankush07261/image-carousel",
//   //   liveURL: "https://ankush-img-carousel.netlify.app",
//   // },
  
// ];

export const demoCyber = [
  {
    image: PortScanner,
    title: "Vulnerability scanner",
    description: "Scans for open ports on your computer",
    gitURL:
      "https://github.com/ankush07261/Cybersecurity/blob/main/vulnerabilityScanner.py",
      concepts: ["Sockets","Port scanning", "Python"],
  },
  {
    image: Keylogger,
    title: "Key logger",
    description: "A tool to capture key press on a computer. (educational purpose)",
    gitURL:
      "https://github.com/ankush07261/Cybersecurity/blob/main/keyLogger.py",
      concepts: ["File handling", "Python"],
  },
  {
    image: PasswordStrength,
    title: "Password strength checker",
    description: "Checks the strength of the entered password.",
    gitURL:
      "https://github.com/ankush07261/Cybersecurity/blob/main/basicPasswordStrength.py",
      concepts: ["Python"],
  },

  // {
  //   image: PasswordCracker,
  //   title: "Password cracker",
  //   description: "Decrypts the input hashed password and compares it with the words in a list of words in the specified text file.",
  //   gitURL:
  //     "",
  // },
];
