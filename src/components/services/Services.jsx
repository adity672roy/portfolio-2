import React from "react";
import "./services.css";
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
const serviceVariants = {
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
const Services = ({ data }) => {
  return (
    <section className="section" id="services">
      <motion.div variants={variants} initial="initial" whileInView="animate">
        <motion.h2 variants={variants} className="title">
          My Services
        </motion.h2>
      </motion.div>
      <div className="services">
        {data &&
          data.map((service) => (
            <motion.div
              variants={serviceVariants}
              initial="initial"
              whileInView="animate"
              className="service"
              key={service._id}
            >
              <div className="service_img_wrapper">
                <img src={service.image.url} alt="" className="service_img" />
              </div>
              <div className="service_details">
                <p className="service_name">{service.name}</p>
                <p className="service_desc">{service.desc}</p>
                <p className="service_charge">{service.charge}</p>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default Services;
