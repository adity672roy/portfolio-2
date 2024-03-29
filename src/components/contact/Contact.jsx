import React from "react";
import { motion } from "framer-motion";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import "./contact.css";

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

const Contact = ({ data }) => {
  return (
    <section className=" section" id="contact">
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="contact"
      >
        <motion.div variants={variants}>
          <motion.h1 variants={variants} className="title">
            contact me
          </motion.h1>
        </motion.div>

        <motion.div variants className="contact_container">
          <motion.div variants={variants} className="contact_details">
            <div className="contact_address">
              <IoLocationOutline className="contact_icons" />
              <div>
                <p> - Address</p>
                <span>{data?.about?.address}</span>
              </div>
            </div>
            <div className="contact_email">
              <HiOutlineMailOpen className="contact_icons" />
              <div>
                <p> - Email</p>
                <span>{data?.email}</span>
              </div>
            </div>
            <div className="contact_phone">
              <LuPhoneCall className="contact_icons" />
              <div>
                <p> - Phone Number</p>
                <span>{data?.about?.phoneNumber}</span>
              </div>
            </div>
          </motion.div>

          <motion.form variants={variants} action="" className="contact_form">
            <div className="input_container">
              <input type="text" className="input" placeholder="Full Name" />
              <input type="email" className="input" placeholder="Email" />
            </div>
            <input type="text" className="input" placeholder="Subject" />
            <textarea
              cols="30"
              rows="5"
              className="input"
              placeholder="Message"
            ></textarea>
            <button className="contact_button">SEND</button>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
