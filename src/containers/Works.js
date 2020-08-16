import React from "react";
import { withRouter } from "react-router-dom";
import { motion } from "framer-motion";

import ImageSection from "../components/worksPage/imageSection/ImageSection";

const homepageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
  exitAnimate: {
    x: "-100vw",
    transition: {
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
      <ImageSection imageList={props.projectList} props={props} />
    </motion.div>
  );
}

export default withRouter(Works);
