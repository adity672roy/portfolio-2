import React from "react";
import "./skills.css";
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
const skillVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      
    },
  },
};
const Skills = ({ data }) => {
  const sortedSkill = data?.sort((a, b) => a.sequence - b.sequence);
  return (
    <section className="section" id="skills">
      <motion.div variants={variants} initial="initial" whileInView="animate">
        <motion.h2 variants={variants} className="title">
          my Skills
        </motion.h2>
      </motion.div>
      <div className="skills">
        {sortedSkill &&
          sortedSkill.map((skill) => (
            <motion.div
              variants={skillVariants}
              initial="initial"
              whileInView="animate"
              className="skill"
              key={skill._id}
            >
              <div className="skill_img_per">
                <div className="skill_wrapper">
                  <img src={skill.image.url} alt="" className="skill_img" />
                  <p className="skill_name">{skill.name}</p>
                </div>
                <p className="skill_percentage"> {skill.percentage}%</p>
              </div>

              {/* ---- */}

              <div>
                <p className="skill_desc">
                  Lorem ipsum dolor sit amet ipsum dolor elit Atque, quasi.
                </p>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default Skills;
