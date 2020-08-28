import React from "react";
import { withRouter } from "react-router-dom";
import { motion } from "framer-motion";

import ImageSection from "../components/worksPage/imageSection/ImageSection";

const homepageVariants = {
  initial: {
    opacity: 0,
    y: "-20vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
  exitAnimate: {
    y: "-20vh",
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Works(props) {
  return (
    <motion.div
      variants={homepageVariants}
      initial='initial'
      animate='animate'
      exit='exitAnimate'
      className='works'
    >
      <ImageSection props={props} />
    </motion.div>
  );
}

export default withRouter(Works);
