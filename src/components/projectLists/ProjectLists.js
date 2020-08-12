import React from "react";

import ProjectList from "./projectList/ProjectList";

const list = [
  "IKEA",
  "be strong",
  "icantbreathe",
  "Storyceller",
  "FIVIE",
  "dk",
  "FRAME",
  "ball.",
  "greyed",
];

function ProjectLists() {
  function selectProject(index) {
    console.log(index);
  }

  return (
    <div className='project-lists'>
      <ul>
        {list.map((eachProject, index) => (
          <ProjectList
            key={index}
            project={eachProject}
            selectProject={() => selectProject(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProjectLists;
