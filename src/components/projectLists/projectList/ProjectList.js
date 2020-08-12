import React from "react";

function ProjectList({ project, selectProject }) {
  return (
    <li className='project-lists__item' onClick={selectProject}>
      {project}
    </li>
  );
}

export default ProjectList;
