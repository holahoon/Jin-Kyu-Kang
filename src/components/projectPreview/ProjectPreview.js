import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import PreviewImages from "./previewImages/PreviewImages";
import PreviewDescription from "./previewDescription/PreviewDescription";
import { ProjectContext } from "../../hooks/ProjectContext";

const buttonHoverVariants = {
  hover: {
    x: -5,
  },
};

function ProjectPreview({ selectedProject }) {
  const projectList = useContext(ProjectContext);

  return (
    <div className='project-preview'>
      <div className='project-preview__image-box'>
        <PreviewImages
          projectList={projectList}
          selectedProject={selectedProject}
        />
      </div>

      <div className='project-preview__content-box'>
        <motion.div
          whileHover='hover'
          className='project-preview__content-box__button'
        >
          <Link to={`/works/${projectList[selectedProject].urlName}`}>
            <motion.svg
              variants={buttonHoverVariants}
              className='button-arrow'
              width='42'
              height='7'
              viewBox='0 0 42 7'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M40 6H30.5C36.9 6 34.8333 3 33 1L40 6Z' fill='#101010' />
              <path
                d='M0 6H40M40 6L33 1C34.8333 3 36.9 6 30.5 6H40Z'
                stroke='#101010'
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
                stroke='#101010'
                strokeWidth='0.5'
              />
            </svg>
          </Link>
        </motion.div>
        <PreviewDescription
          selectedProject={selectedProject}
          projectList={projectList}
        />
      </div>
    </div>
  );
}

export default ProjectPreview;
