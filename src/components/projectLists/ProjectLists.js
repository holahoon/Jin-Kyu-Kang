import React, { useContext, useRef } from "react";

import ProjectList from "./projectList/ProjectList";
import { ProjectContext } from "../../hooks/ProjectContext";

function ProjectLists({ selectedProject, projectSelectionHandler }) {
  const projectList = useContext(ProjectContext);
  const listItemRef = useRef(3);

  return (
    <div className='project-lists'>
      <div className='project-lists__red-box-container'>
        <span
          style={{
            top: `${listItemRef.current.clientHeight * selectedProject}px`,
          }}
          className='red-box'
        ></span>
      </div>

      <ul className='project-lists__wrapper'>
        {projectList.map((eachProject, index) => (
          <ProjectList
            listItemRef={listItemRef}
            key={index}
            project={eachProject.projectName}
            category={eachProject.category}
            selectedProject={selectedProject === index ? true : false}
            projectSelectionHandler={() => projectSelectionHandler(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProjectLists;
