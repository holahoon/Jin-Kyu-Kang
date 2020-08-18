import React from "react";
import { motion } from "framer-motion";

function PreviewImages({ selectedProject, projectList }) {
  return (
    <>
      {projectList.map((each, index) => (
        <motion.img
          key={index}
          className={`project-preview__image-box__image${
            selectedProject === index ? " project-selected" : ""
          }`}
          src={each.image}
          alt={`homepage-project-preview-${each.projectName}`}
          draggable='false'
        />
      ))}
    </>
  );
}

export default PreviewImages;
