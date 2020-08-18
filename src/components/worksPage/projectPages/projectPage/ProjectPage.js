import React from "react";
import { Link } from "react-router-dom";
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
  worksImages,
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
      <div className='works__project__back-button'>
        <span className='line'></span>
        <Link to='/works'>
          <svg
            viewBox='0 0 26 9'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M2 4H7.7C3.86 4 5.1 2.2 6.2 1L2 4Z' fill='black' />
            <path
              d='M26 4H2M2 4L6.2 1C5.1 2.2 3.86 4 7.7 4H2Z'
              stroke='black'
            />
          </svg>

          <span className='button-text'>BACK</span>
        </Link>
      </div>
      <h4 className='works__project__subtitle'>
        <span className='text'>
          {worksSubtitle.text} : {worksSubtitle.year}
        </span>
      </h4>

      <div className='works__project__scroll-box'>
        <div className='works__project__description'>
          {worksDescription.map((each, index) => (
            <p key={`${each}-${index}`}>{each}</p>
          ))}
        </div>

        <div className='works__project__scroll'>
          <div className='works__project__scroll__image-box'>
            {worksImages.map((image) => (
              <span
                className={`image-wrapper${image.config.gif ? "-shrink" : ""}`}
              >
                <img src={image.image} alt={image.alt} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectPage;
