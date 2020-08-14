import React from "react";
import { motion } from "framer-motion";

// const listHover = {
//   hover: {
//     scale: 1.25,
//     transition: {
//       duration: 0.1,
//     },
//   },
// };

function ProjectList({ selectedProject, project, projectSelectionHandler }) {
  const listHover = {
    hover: {
      scale: !selectedProject && 1.25,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <motion.li
      variants={listHover}
      // whileHover={!selectedProject && "hover"}
      whileHover='hover'
      style={{ transformOrigin: "0% 50%" }}
      // style={{ fontSize: selectedProject ? "20px" : "14px" }}
      className={`project-lists__wrapper__item${
        selectedProject ? " project-selected" : ""
      }`}
      onClick={projectSelectionHandler}
    >
      {project}
    </motion.li>
  );
}

export default ProjectList;
