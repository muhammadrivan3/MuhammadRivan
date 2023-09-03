import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motions.js";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
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
        I am a student, I enjoy problem solving and coding, I will and always
        try my best for whatever work I do, I have worked on technologies such
        as python, java, php, c, c++, dart, javascripts, I am very interested in
        developing applications that help solve real world problems that impact
        millions of humans or users.
      </motion.p>
      {/* <section className="m-h-[100vh] w-[100%] flex justify-center relative align-center">
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
        >
          <SwiperSlide>
            <div className="cardWorks">
              <div className="postCard">
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </div>
              <div className="contentCard">
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="cardWorks">
              <div className="postCard">
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </div>
              <div className="contentCard">
              </div>
            </div>
            
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
        </Swiper>
      </section> */}
    </>
  );
};

export default SectionWrapper(Works, "projects");
