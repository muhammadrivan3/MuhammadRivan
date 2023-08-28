import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services,skillservices } from "../constants";
import { fadeIn, textVariant } from "../utils/motions.js";
import { SectionWrapper } from "../hoc";
import { useState } from "react";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <>
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            option={{ max: 45, scale: 2, speed: 450 }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <div className="bg-[#eb3d34] rounded-[10%] mt-[-30%] ml-[-120%]" >
              <span className="p-[10px]">Skills</span>
            </div>
            <img src={icon} alt={title} className="w-25 h-25 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
        
      </Tilt>
    </>
  );
};
const About = () => {
  
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introdction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a student, I enjoy problem solving and coding, I will and always
        try my best for whatever work I do, I have worked on technologies such
        as python, java, php, c, c++, dart, javascripts, I am very
        interested in developing applications that help solve real world
        problems that impact millions of humans or users.
      </motion.p>
      <div className="mt-10 flex flex-wrap gap-10" >
        {services.map((service, index) => (
          <div key={index} ><ServiceCard key={service.title} index={index}  {...service}  /></div>
          
        ))}
      </div>
      <div className="mt-5 bg-primary rounded-[5px]">
        <h1 className="ml-10 text-white font-black md:text-[30px] sm:text-[22px] xs:text-[22px] text-[22px] text-black uppercase tracking-wider" >Skills</h1>
        <div className="flex flex-wrap text-white p-[10px]">
          <span>Databases : </span>
          <span className="ml-[5px]">{skillservices[0].databaseSkills}</span>
        </div>
        <div className="flex flex-wrap text-white p-[10px]">
          <span>Library : </span>
          <span className="ml-[5px]">{skillservices[0].librarySkills}</span>
        </div>
        <div className="flex flex-wrap text-white p-[10px]">
          <span>Framework : </span>
          <span className="ml-[5px]">{skillservices[0].frameworkSkills}</span>
        </div>
        <div className="flex flex-wrap text-white p-[10px]">
          <span>Other & Technologies : </span>
          <span className="ml-[5px]">{skillservices[0].otherSkills}</span>
        </div>
      </div>
      
    </>
  );
};

export default SectionWrapper(About, "about");
