import React from "react";
import { motion } from "framer-motion";

const backdropVariant = {
  hidden: {
    visibility: "hidden",
    opacity: 0,
    zIndex: -1,
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
  show: {
    visibility: "visible",
    opacity: 1,
    zIndex: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
    },
  },
};

function Backdrop({ isOpen, toggleContactMenu }) {
  return (
    <motion.div
      variants={backdropVariant}
      initial={false}
      animate={isOpen ? "show" : "hidden"}
      className='backdrop'
      onClick={toggleContactMenu}
    ></motion.div>
  );
}

export default Backdrop;
