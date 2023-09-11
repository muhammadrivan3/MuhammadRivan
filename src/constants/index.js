import { ic_development,ic_db,ic_framework,ss_ecommerce,ss_smk,ss_smkjambi } from "../assets";

export const navLinks = [
     {
      id: "about",
      title: "About",
    },
    // {
    //   id: "projects",
    //   title: "Projects",
    // },
    // {
    //   id: "contact",
    //   title: "Contact",
    // },
]
const services = [
  {
    title: "LANGUAGE",
    icon: ic_development,
    skillService: "C, C++, Python, Java, Php, Dart, Html, Css, JavaScript",
  },
  {
    title: "DATABASE",
    skillService: "MySQL, PostgreSQL, SQLITE, MongoDB",
    icon: ic_db,
  },
  
  {
    title: "FRAMEWORK",
    icon: ic_framework,
    skillService: "Flask, Django, Flutter, Codeigniter, Laravel, Talwindcss, Bootstrap, React, Tensorflow",
  },
  
  {
    title: "OTHER",
    icon: ic_development,
    skillService: "HTML, Git, Docker, AWS, Ms Office, Heroku, Adobe",
  },
  
];
const allProjects = [
  {
    titleProjects: "E-Commerce",
    imageProjects: ss_ecommerce,
    descProjects: "I created this project using the dart flutter language.",
    linkProjects: "https://github.com/muhammadrivan3/e-ecommerce",
  },
  {
    titleProjects: "Attendance",
    imageProjects: ss_smk,
    descProjects: "I created this project, where attendance filling becomes online, and uses the waterfall method.",
    linkProjects: "https://github.com/username/repository",
  },
  {
    titleProjects: "Decision making system",
    imageProjects: ss_smkjambi,
    descProjects: "I made this project, to find out the performance of teachers who teach at school, using the Decision making system method.",
    linkProjects: "https://github.com/muhammadrivan3/SMK_1_PASAMAN",
  },
];
export { services,allProjects};