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
  return (
    <div>
      <ul>
        {list.map((project, index) => (
          <ProjectList key={index} project={project} />
        ))}
      </ul>
    </div>
  );
}

export default ProjectLists;
