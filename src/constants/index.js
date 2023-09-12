import { ic_db, ic_development, ic_framework } from "../assets";
export const sidemenu = [
    {
     id: "hi",
     title: "Hi",
   },
   {
    id: "about",
    title: "About",
  },
  {
    id: "resume",
    title: "Resume",
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
export { services};