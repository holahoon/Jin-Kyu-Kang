import React from "react";

import ProjectPage from "./projectPage/ProjectPage";

import projectImage from "../../../assets/images/home-dk.png";

const worksTitle = "FRAME";
const worksSubtitle = {
  text: "Poster Design",
  year: "2019",
};
const worksDescription = [
  "At the beginning of 2019, I decided to take on a new challenge in design. I wanted to represent my new life in a poster with the concept ‘frame’. I expressed the new world and the new environment in the sky blue background, the abstract graphic images represent my diverse life experiences, and the glassy font designed by myself symbolizes my willingness to see everything with transparency. This design was the starting point of creating my portfolio and, after 9 months of effort and dedication, I got into a design agency.",
];
const worksImage = projectImage;

function FrameProject() {
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

export default FrameProject;
