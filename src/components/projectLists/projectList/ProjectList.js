import React from "react";
import { motion } from "framer-motion";

const listHover = {
  hover: {
    fontSize: "20px",
    transition: {
      duration: 0.1,
    },
  },
};

function ProjectList({ selectedProject, project, projectSelectionHandler }) {
  return (
    <motion.li
      variants={listHover}
      whileHover='hover'
      className={`project-lists__wrapper__item${selectedProject}`}
      // className={`project-lists__wrapper__item`}
      onClick={projectSelectionHandler}
    >
      {project}
    </motion.li>
  );
}

export default ProjectList;
