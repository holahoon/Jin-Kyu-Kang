import React from "react";

import ProjectPage from "./projectPage/ProjectPage";

import projectImage1 from "../../../assets/images/projects/Storyceller/storyceller_main.png";
import projectImage2 from "../../../assets/images/projects/Storyceller/storyceller_wireframe.png";
import projectImage3 from "../../../assets/images/projects/Storyceller/storyceller_app/1_login_app.gif";
import projectImage4 from "../../../assets/images/projects/Storyceller/storyceller_app/2_detailed_view_app.gif";
import projectImage5 from "../../../assets/images/projects/Storyceller/storyceller_app/3_compose_app.gif";
import projectImage6 from "../../../assets/images/projects/Storyceller/storyceller_app/5_dark_mode_app.gif";

const worksTitle = "storyceller";
const worksSubtitle = {
  text: "UI/UX",
  year: "2019",
};
const worksDescription = [
  "When traveling, my mind retains funny episodes in the places I visited, delicious foods, and happy moments with beloved ones. Some register those memories by writing down in the diary, taking photos, and uploading them to social media. The stories that combine happiness and sadness are saved in my mind, then become a theme of conversation among friends and shared through social media. Humans remember and also forget. They write the diary, make a note in an app, take a photo and save it in cell phones because they want to hang on those memories. But before taking these actions, the experience itself is perceived through my eyes, nose, and mouth, and then saved in my brain.",
  "For the storytelling, there has to be a story, a teller to deliver it, and the story is pulled out from a cell of my brain. Putting together all these concepts I created an app called ‘Storyceller’. Although similar apps already exist, I built a simpler and easier app, and more importantly the one that I would like to use. I planned, designed, and managed from the wireframing, visual design, to mockup, even though it’s conceptual.",
];
const worksImages = [
  {
    image: projectImage1,
    alt: "storyceller-desktop",
    config: {
      gif: false,
    },
  },
  {
    image: projectImage2,
    alt: "storyceller-wireframe",
    config: {
      gif: false,
    },
  },
  {
    image: projectImage3,
    alt: "storyceller-gif",
    config: {
      gif: true,
    },
  },
  {
    image: projectImage4,
    alt: "storyceller-gif",
    config: {
      gif: true,
    },
  },
  {
    image: projectImage5,
    alt: "storyceller-gif",
    config: {
      gif: true,
    },
  },
  {
    image: projectImage6,
    alt: "storyceller-gif",
    config: {
      gif: true,
    },
  },
];

function StorycellerProject() {
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

export default StorycellerProject;
