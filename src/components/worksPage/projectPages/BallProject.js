import React from "react";

import ProjectPage from "./projectPage/ProjectPage";

import projectImage from "../../../assets/images/home-dk.png";

const worksTitle = "ball.";
const worksSubtitle = {
  text: "Concept Design",
  year: "2019",
};
const worksDescription = [
  "A kid, looking at a tennis ball, asked me what kind of ball it was. I simply answered ‘it’s a tennis ball’ and the kid asked me what tennis is. I stopped the conversation there thinking she’ll find out soon enough. But on second thought, a kid who never experienced this sport, unless she has the chance to play it or watch the games, she might never know tennis.",
  "There’s a great variety of sports in the world and many of them use a ball. It occurred to me it would be nice for this kid if there was a site that can show all the different types of ball and which sport it is for. So I created the conceptual design called ‘ball.’. As it is shown in the designs, I conceptualized and integrated the color, the movements, and other aspects of the tennis ball. Given the opportunity, I would like to make an editorial design book presenting diverse sports. ",
];
const worksImage = projectImage;

function BallProject() {
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

export default BallProject;
