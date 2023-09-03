import { ic_development,ic_db,ic_framework,ic_cpp,ic_java,ic_php,ic_react,ic_css,ic_html,ic_javascript,ic_dart } from "../assets";

export const navLinks = [
     {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
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
  
  // {
  //   title: "LIBRARY",
  //   icon: ic_cpp,
  //   skillService: "Numpy, Pandas, OpenCV",
  // },
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
const skillservices = [
  {
    databaseSkills: "MySQL, PostgreSQL, SQLITE, MongoDB",
    librarySkills: "Numpy, Pandas, OpenCV",
    frameworkSkills: "Flask, Django, Flutter, Codeigniter, Laravel, Talwindcss, Bootstrap, React, Tensorflow",
    otherSkills: "HTML, Git, Docker, AWS, Ms Office, Heroku, Adobe",
  },
];
export { services,skillservices};