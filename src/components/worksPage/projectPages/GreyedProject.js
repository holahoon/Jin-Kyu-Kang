import React from "react";

import ProjectPage from "./projectPage/ProjectPage";

import projectImage from "../../../assets/images/home-dk.png";

const worksTitle = "greyed";
const worksSubtitle = {
  text: "Branding",
  year: "2018",
};
const worksDescription = [
  "One day I came to wonder what would be like to live as a color-blind person. There are people born with color blindness and others who acquire it later in life. I imagined it would be challenging for those unable to see or distinguish colors to figure out what’s their favorite color, what color suits them best, and how to express themselves through colors. Colors are formed by reflections of the light but if there is no light, we can only see black and white, in monochromatic grayscale. And I thought the grayscale palette would be helpful to those who are stressed about what colors to wear or combine.",
  "That’s why I thought of the idea of a multi-brand store that offers white, black, and grey, all monochromatic products. It could be arguable why such a site is even necessary when the color-blind people are free to choose whatever color they want. But I considered some of them could be insecure about their choices since they can’t distinguish and worry about what other people might think, and decided to go forward with it. It wasn’t a real project to develop, just a conceptual one, so I wanted to try something new. The design was started from this initial idea.",
  "At that time, I was merely taking an interest in design. I hadn’t any skills and everything was new and unknown. The only tool I could use was Photoshop and even that at the beginner’s level. Focused on the one clear concept, I pursued designs that looked pretty to me so there was a lot to improve and the process was quite long. But as the first project, it turned out to be satisfactory. If I had the chance in the future, I would like to design a product website that’s more beneficial to color-blind customers and also visually more attractive.",
];
const worksImage = projectImage;

function GreyedProject() {
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

export default GreyedProject;
