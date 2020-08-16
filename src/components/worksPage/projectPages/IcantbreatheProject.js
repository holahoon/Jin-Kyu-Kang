import React from "react";

import ProjectPage from "./projectPage/ProjectPage";

import projectImage from "../../../assets/images/home-dk.png";

const worksTitle = "icantbreathe";
const worksSubtitle = {
  text: "Redesign project",
  year: "2020",
};
const worksDescription = [
  "I’ve been moving a lot from New York to D.C., to Philadelphia, then to Austin, and I became a frequent customer of IKEA. Every time I purchased furniture and housewares, the high functionality and relatively accessible prices of IKEA satisfied my needs.",
  "I visited many of their stores and bought and used so many products that I got to know the pros and cons of IKEA. Particularly using their app, I found out various aspects to be improved. So I redesigned it analyzing how IKEA can offer upgraded services based on my own experiences.",
];
const worksImage = projectImage;

function IcantbreatheProject() {
  return (
    <>
      <ProjectPage
        worksTitle={worksTitle}
        worksSubtitle={worksSubtitle}
        worksDescription={worksDescription}
        worksImage={worksImage}
      />
    </>
  );
}

export default IcantbreatheProject;
