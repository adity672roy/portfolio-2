import React from "react";
import "./about.css";
import Timeline from "./Timeline";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -50,
    y: 50,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};
const aboutVariants = {
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

const About = ({ data }) => {
  const experience = data?.timeline?.filter((item) => !item.forEducation);
  const education = data?.timeline?.filter((item) => item.forEducation);
  return (
    <section className="section " id="about">
      <motion.div variants={variants} initial="initial" whileInView="animate">
        <motion.h2 variants={variants} className="title">
          About Me
        </motion.h2>
      </motion.div>
      {data.about && (
        <motion.div
          className="about"
          variants={aboutVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.div variants={aboutVariants} className="about_left">
            <img src={data.about.avatar.url} alt="" className="about_img" />
          </motion.div>
          <motion.div variants={aboutVariants} className="about_right">
            <div className="about_description">
              <p>{data.about.description}</p>
            </div>
            <div className="about_exp_project">
              <div className="about_project">
                <p>{data.about.some_total} + </p>
                <span>trusted clients</span>
              </div>
              <div className="about_exp">
                <p>{data.about.exp_year} + </p>
                <span>years of experience</span>
              </div>
              <div className="about_project">
                <p>{data.about.some_total} + </p>
                <span>completed projects</span>
              </div>
            </div>
            <div className="about_btn">
              <button className="about_button">Download CV</button>
              <button className="about_button">Hire Me</button>
            </div>
          </motion.div>
        </motion.div>
      )}
      {/* timeline */}
      <div>
        <motion.div variants={variants} initial="initial" whileInView="animate">
          <motion.h2 variants={variants} className="title">
            education & experience
          </motion.h2>
        </motion.div>

        <div className="about_timeline">
          <div className="education">
            <motion.h2
              variants={variants}
              initial="initial"
              whileInView="animate"
              className="about_title"
            >
              Education
            </motion.h2>
            <Timeline data={education} />
          </div>
          <div className="experience">
            <motion.h2
              variants={variants}
              initial="initial"
              whileInView="animate"
              className="about_title"
            >
              Experience
            </motion.h2>
            <Timeline data={experience} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
