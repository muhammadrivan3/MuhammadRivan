import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motions.js";
import { SectionWrapper } from "../hoc";
import { useState } from "react";

const ServiceCard = ({ index, title, icon, skillService }) => {
  return (
    <>
      <Tilt className="xs:w-[250px] w-full cardSkills">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[10px] shadow-card"
        >
          <div
            // option={{ max: 45, scale: 2, speed: 450 }}
            className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            {/* <div className="bg-[#eb3d34] rounded-[10%] mt-[-30%] ml-[-120%]" >
              <span className="p-[10px]">Skills</span>
            </div> */}
            <div className="postCard">
              <img
                src={icon}
                alt={title}
                className="w-25 h-25 object-contain"
              />
              <span className="text-white text-[16px] font-bold text-center">
                {title}
              </span>
            </div>
            <div className="detailCard"><span className="">{skillService}</span></div>
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
        as python, java, php, c, c++, dart, javascripts, I am very interested in
        developing applications that help solve real world problems that impact
        millions of humans or users.
      </motion.p>
      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <div key={index}>
            <ServiceCard key={service.title} index={index} {...service} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
