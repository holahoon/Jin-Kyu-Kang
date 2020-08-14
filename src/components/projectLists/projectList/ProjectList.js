import React from "react";

function ProjectList({ selectedProject, project, projectSelectionHandler }) {
  return (
    <li
      className={`project-lists__wrapper__item${
        selectedProject ? " project-selected" : ""
      }`}
      onClick={projectSelectionHandler}
    >
      {project}
    </li>
  );
}

export default ProjectList;
