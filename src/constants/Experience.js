import drumKit from "../assets/images/MyWork-SS/drumKit.png";
import simonGame from "../assets/images/MyWork-SS/simonGame.png";
// import todoList from '../assets/images/MyWork-SS/todoList.png'
// import blogWebsite from '../assets/images/MyWork-SS/BlogPage.png'
import weatherAPI from "../assets/images/MyWork-SS/weatherAPI.png";
import React_crud from "../assets/images/MyWork-SS/Redux-CRUD.png";
import randomQuote from "../assets/images/MyWork-SS/quoteGen.png";
import imgCarousel from "../assets/images/MyWork-SS/imgCarousel.png";
import TempBMI from "../assets/images/MyWork-SS/TempBMI.png";
import EDCJIT from "../assets/images/MyWork-SS/edcjit.png";
import cadabams from "../assets/images/MyWork-SS/cadabams.png";

export const projects = [
  {
    image: cadabams,
    title: "Cadabam's Group",
    role: "Full stack intern",
    description:
      "Worked on binding APIs in the admin panel, built appoinment booking page and added feature to filter out doctors based on the customer's need.",
    duration: "01/02/2024 - 31/03/2024",
  },
  {
    image: EDCJIT,
    title: "eDC|JIT",
    role: "Web developer",
    description:
      "Built, hosted and maintained the official website for the Enterprenuership Development Club in Jyothy Institute of Technology.",
    duration: "24/07/2023 - 31/01/2024",
  },
];

export const demoprojects = [
  {
    image: weatherAPI,
    title: "Weather web application",
    description: "Built using ReactJS and the open weather API",
    gitURL: "https://github.com/ankush07261/Weather-application",
    liveURL: "https://ankush-weather-application.netlify.app/",
  },
  // {
  //     image: blogWebsite,
  //     title: "Blog web application",
  //     description:"Built using MongoDB, ExpressJS, EJS and Bootstrap.",
  //     gitURL: "https://github.com/ankush07261/Blog-web-app",
  //     liveURL: "",
  // },
  // {
  //     image:todoList ,
  //     title: "To-Do List",
  //     description:"Built using MongoDB, ExpressJS and EJS.",
  //     gitURL: "https://github.com/ankush07261/To-Do-List",
  //     liveURL: "",
  // },
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
    liveURL: "https://ankush07261.github.io/Drum-Kit/",
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
