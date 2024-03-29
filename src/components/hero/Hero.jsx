import React from "react";
import "./hero.css";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

const Hero = ({ data }) => {
  return (
    <div className="section" id="home">
      {data && (
        <>
          <div className="home_img_wrapper">
            <img src={data.avatar.url} alt="" className="home_img" />
          </div>
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            className="home_details"
          >
            <motion.div variants={variants}>
              <motion.p variants={variants} className="home_greet">
                Hello , I'm
              </motion.p>
              <motion.p variants={variants} className="home_name">
                - {data.name}
              </motion.p>
              <motion.p variants={variants} className="home_title">
                {data.title}
              </motion.p>
            </motion.div>
            <motion.div variants={variants}>
              <motion.p variants={variants} className="home_subtitle">
                {data.subTitle}
              </motion.p>
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Hero;
