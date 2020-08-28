import React from "react";

import ProjectPage from "./projectPage/ProjectPage";

import projectImage1 from "../../../assets/images/projects/IKEA/ikea.png";

const worksTitle = "IKEA (in progress)";
const worksSubtitle = {
  text: "UI/UX",
  year: "2020",
};
const worksDescription = [
  "I’ve been moving a lot from New York to D.C., to Philadelphia, then to Austin, and I became a frequent customer of IKEA. Every time I purchased furniture and housewares, the high functionality and relatively accessible prices of IKEA satisfied my needs.",
  "I visited many of their stores and bought and used so many products that I got to know the pros and cons of IKEA. Particularly using their app, I found out various aspects to be improved. So I redesigned it analyzing how IKEA can offer upgraded services based on my own experiences.",
];
const worksImages = [
  {
    image: projectImage1,
    alt: "ikea-desktop",
  },
];

function ikeaProject() {
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

export default ikeaProject;
