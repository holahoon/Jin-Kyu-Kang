import React from "react";

import ProjectList from "./projectList/ProjectList";

function ProjectLists({
  projectList,
  selectedProject,
  projectSelectionHandler,
}) {
  return (
    <div className='project-lists'>
      <ul className='project-lists__wrapper'>
        {projectList.map((eachProject, index) => {
          return (
            <ProjectList
              key={index}
              project={eachProject}
              selectedProject={
                // selectedProject === index ? " project-selected" : ""
                selectedProject === index ? true : false
              }
              projectSelectionHandler={() => projectSelectionHandler(index)}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectLists;
