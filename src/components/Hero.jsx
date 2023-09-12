import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
const Hero = () => {
  return (
    <div className="relative w-full h-screen mx-auto bg-black" id="hi">
      <div className="bg-animation-cursor z-0">
        {Array.from({ length: 500 }).map((_, index) => {
          return <span key={index}></span>;
        })}
        <div className=" absolute inset-0 z-10" style={{pointerEvents:"none"}}>
          <div style={{ position: "relative" }}>
          <div
                className={`${styles.paddingX}absolute inset-0 top-[10px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
              >
                <div className="flex flex-col justify-center items-center mt-[10%]" >
                  <div className="w-5 h-5 rounded-full bg-white" />
                  <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>
                <div className="mt-[5%]">
                  <h1 className={`${styles.heroHeadText} text-white`}>
                    Hi, I'm M.Rivan
                  </h1>
                  <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                    I am an enthusiastic and dedicated programmer, I have skills
                    and passion in developing software. I have educational
                    background or experience in various programming languages
                    and relevant frameworks, as well as an understanding of
                    programming concepts and algorithms.
                  </p>
                  <div>
                    <a
                      href="https://www.youtube.com/channel/UCK2UIasvwqqlh0KG_84qrDA"
                      target="_blank"
                      style={{ pointerEvents: "auto" }}
                    >
                      <i className="fa fa-youtube" id="youtube"></i>
                    </a>
                    <a
                      href="https://instagram.com/_m_rivan_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
                      target="_blank"
                      style={{ pointerEvents: "auto" }}
                    >
                      <i className="fa fa-instagram" id="instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/muhammad-rivan-856357279/"
                      target="_blank"
                      style={{ pointerEvents: "auto" }}
                    >
                      <i className="fa fa-linkedin" id="twitter"></i>
                    </a>
                    <a
                      href="https://twitter.com/M_Rivan3?t=Hes9Pla_dEegQeYg7y6ArQ&s=08"
                      target="_blank"
                      style={{ pointerEvents: "auto" }}
                    >
                      <i className="fa fa-twitter" id="twitter"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/rivan.osd.7?mibextid=b06tZ0"
                      target="_blank"
                      style={{ pointerEvents: "auto" }}
                    >
                      <i className="fa fa-facebook-square" id="facebook"></i>
                    </a>
                    <a
                      href="https://github.com/muhammadrivan3"
                      target="_blank"
                      style={{ pointerEvents: "auto" }}
                    >
                      <i className="fa fa-github-square github" id="github"></i>
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="relative w-full h-screen mx-auto bg-black">
    //   <div className="bg-animation-cursor z-0">
    //     {Array.from({ length: 500 }).map((_, index) => {
    //       return <span key={index}></span>;
    //     })}
    //     <div className="bg-white absoulute inset-0 z-10">Hellow World</div>
    //   </div>
    // </div>
  );
};

export default Hero;
