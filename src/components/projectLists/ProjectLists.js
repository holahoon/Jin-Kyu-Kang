import React, { useRef } from "react";

import ProjectList from "./projectList/ProjectList";

function ProjectLists({
  projectList,
  selectedProject,
  projectSelectionHandler,
}) {
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
            selectedProject={selectedProject === index ? true : false}
            projectSelectionHandler={() => projectSelectionHandler(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProjectLists;
