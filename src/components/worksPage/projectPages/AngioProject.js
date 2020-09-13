import React from "react";

import ProjectPage from "./projectPage/ProjectPage";

import projectImage1 from "../../../assets/images/projects/angio/angio.png";

const worksTitle = "angio";
const worksSubtitle = {
  text: "Branding",
  year: "2020",
};
const worksDescription = [];
const worksImages = [
  {
    image: projectImage1,
    alt: "angio-desktop",
  },
];

function AngioProject() {
  return (
    <>
      <ProjectPage
        worksTitle={worksTitle}
        worksSubtitle={worksSubtitle}
        worksDescription={worksDescription}
        worksImages={worksImages}
      />
    </>
  );
}

export default AngioProject;
