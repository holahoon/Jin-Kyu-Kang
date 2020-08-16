import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import PreviewImages from "./previewImages/PreviewImages";
import PreviewDescription from "./previewDescription/PreviewDescription";

const buttonVariants = {
  hover: {
    x: -5,
  },
};

function ProjectPreview({ selectedProject, projectList }) {
  return (
    <div className='project-preview'>
      <div className='project-preview__image-box'>
        <PreviewImages selectedProject={selectedProject} />
      </div>

      <div className='project-preview__content-box'>
        <Link to={`/works/${projectList[selectedProject].urlName}`}>
          <motion.div
            whileHover='hover'
            className='project-preview__content-box__button'
          >
            <motion.svg
              variants={buttonVariants}
              className='button-arrow'
              width='42'
              height='7'
              viewBox='0 0 42 7'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M40 6H30.5C36.9 6 34.8333 3 33 1L40 6Z' fill='black' />
              <path
                d='M0 6H40M40 6L33 1C34.8333 3 36.9 6 30.5 6H40Z'
                stroke='black'
              />
            </motion.svg>
            <svg
              className='button-circle'
              width='30'
              height='30'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='15'
                cy='15'
                r='14.75'
                stroke='black'
                strokeWidth='0.5'
              />
            </svg>
          </motion.div>
        </Link>
        <PreviewDescription selectedProject={selectedProject} />
      </div>
    </div>
  );
}

export default ProjectPreview;
