import React from "react";

function ProjectList({
  selectedProject,
  project,
  listItemRef,
  projectSelectionHandler,
}) {
  return (
    <li
      ref={listItemRef}
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
