import React from "react";

import ProjectPage from "./projectPage/ProjectPage";

import projectImage from "../../../assets/images/home-dk.png";

const worksTitle = "dk";
const worksSubtitle = {
  text: "Web Design",
  year: "2019",
};
const worksDescription = [
  "My friend and I were pursuing our dreams in Austin and met each other. He wanted to be a front-end developer and I aspired to be a designer. Without any background or experience, we moved around the mouse and pounded the keyboard. We had no skills and no clue what the other wanted. We just had this vague idea of making a responsive and sleek portfolio site and we got started with my friend DK’s site. In this process, we learned the importance of communication and realized that unrealistic designs can be a huge obstacle in development. It took us a month to reach a satisfying result and we were able to submit job applications with this portfolio.",
];
const worksImage = projectImage;

function DkProject() {
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

export default DkProject;
