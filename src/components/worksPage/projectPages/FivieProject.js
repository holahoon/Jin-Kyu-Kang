import React from "react";

import ProjectPage from "./projectPage/ProjectPage";

import projectImage from "../../../assets/images/home-dk.png";

const worksTitle = "FIVIE";
const worksSubtitle = {
  text: "UI/UX",
  year: "2019",
};
const worksDescription = [
  "“We believe in the simple, not the complex.” It’s a quote from Apple’s design philosophy. Apple’s company vision to create products that customers need with innovative designs was a great inspiration to me.",
  "Before their steaming service ‘Apple TV+’ was launched, I imagined what kind of site they would offer if they entered the streaming market. And I attempted to create a simple movie streaming site following Apple’s design philosophy and using Apple’s design resources to make it familiar and blend into their design system. I studied currently available media sites to learn their problems and missing elements, and then I started the project from the wireframing with a developer friend to make it feasible.",
  "Most of the movie search engines have a complicated structure due to the extensive database. And the users can become indecisive about what to watch. So I arranged the users to type in keywords about their preferences such as genre and actor or director’s name, already cataloged as tags, and it would show them just the top five search results facilitating the choice. I named it ‘Fivie’, combining the words ‘five’ and ‘movie’. If a user wishes to have more options, could select more additional tags. I completed this conceptual site with an algorithm that can collect data about users’ interests and preferences.",
];
const worksImage = projectImage;

function FivieProject() {
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

export default FivieProject;
