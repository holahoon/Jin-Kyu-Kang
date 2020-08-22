import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function PreviewImages({ selectedProject, projectList }) {
  return (
    <>
      {projectList.map((each, index) => (
        <Link
          to={`/works/${projectList[selectedProject].urlName}`}
          key={index}
          className={`project-preview__image-box__image${
            selectedProject === index ? " project-selected" : ""
          }`}
        >
          <motion.img
            src={each.image}
            alt={`homepage-project-preview-${each.projectName}`}
            draggable='false'
          />
        </Link>
      ))}
    </>
  );
}

export default PreviewImages;
