import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motions.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { allProjects } from "../constants";
import { ic_github } from "../assets";

const Works = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>My Project</p>
        {/* <h2 className={styles.sectionHeadText}>About Me</h2> */}
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I have worked on several projects with various programming languages,
        you can see the various projects that I have made on github.com, you can
        click the github icon on the project review below
      </motion.p>
      <section className="m-h-[100vh] w-[100%] flex justify-center relative align-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          initialSlide={1}
        >
          {allProjects.map((project, index) => (
            <SwiperSlide>
              <div className="bg-tertiary w-[100%] h-[100%] rounded-[10px]">
                <div className="h-[50%] w-[100%] rounded-[10px]  mt-[0px]">
                  <img
                    className="h-[100%] w-[100%] rounded-t-[10px]"
                    src={project.imageProjects}
                  />
                  <a
                    href={project.linkProjects} // Ganti dengan URL GitHub yang sesuai
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2 right-2" // Sesuaikan posisi ikon sesuai kebutuhan Anda
                  >
                    <img src={ic_github} alt="GitHub" width="50" height="50" />
                  </a>
                </div>
                <div className="p-[10px] h-[100%]">
                  <div className="shadow-blue-500"><span className="text-[22px]">{project.titleProjects}</span></div>
                  <span className="text-[14px] leading-3">
                    {project.descProjects}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default SectionWrapper(Works, "projects");
