import React from "react";
import { motion } from "framer-motion";

const projectVariants = {
  initial: {
    opacity: 0,
    y: "20vh",
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
    y: "50vh",
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function ProjectPage({
  worksTitle,
  worksSubtitle,
  worksDescription,
  worksImage,
}) {
  return (
    <motion.div
      variants={projectVariants}
      initial='initial'
      animate='animate'
      exit='exitAnimate'
      className='works__project'
    >
      <h2 className='works__project__title'>{worksTitle}</h2>
      <h4 className='works__project__subtitle'>
        <span className='text'>{worksSubtitle.text}</span>
        <span className='year'>{worksSubtitle.year}</span>
      </h4>

      <div className='works__project__description'>
        {worksDescription.map((each, index) => (
          <p key={`${each}-${index}`}>{each}</p>
        ))}
      </div>

      <div className='works__project__image'>
        {/* <img src={worksImage.image} alt={worksImage.alt} /> */}
      </div>
    </motion.div>
  );
}

export default ProjectPage;
