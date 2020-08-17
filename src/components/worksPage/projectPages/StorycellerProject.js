import React from "react";

import ProjectPage from "./projectPage/ProjectPage";

import projectImage from "../../../assets/images/home-dk.png";

const worksTitle = "storyceller";
const worksSubtitle = {
  text: "UI/UX",
  year: "2019",
};
const worksDescription = [
  "When traveling, my mind retains funny episodes in the places I visited, delicious foods, and happy moments with beloved ones. Some register those memories by writing down in the diary, taking photos, and uploading them to social media. The stories that combine happiness and sadness are saved in my mind, then become a theme of conversation among friends and shared through social media. Humans remember and also forget. They write the diary, make a note in an app, take a photo and save it in cell phones because they want to hang on those memories. But before taking these actions, the experience itself is perceived through my eyes, nose, and mouth, and then saved in my brain.",
  "For the storytelling, there has to be a story, a teller to deliver it, and the story is pulled out from a cell of my brain. Putting together all these concepts I created an app called ‘Storyceller’. Although similar apps already exist, I built a simpler and easier app, and more importantly the one that I would like to use. I planned, designed, and managed from the wireframing, visual design, to mockup, even though it’s conceptual.",
];
const worksImage = projectImage;

function StorycellerProject() {
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

export default StorycellerProject;
