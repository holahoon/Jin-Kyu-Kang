import React from "react";

import ProjectPage from "./projectPage/ProjectPage";

import projectImage1 from "../../../assets/images/projects/icantbreathe/icantbreathe.png";

const worksTitle = "icantbreathe";
const worksSubtitle = {
  text: "Visual Design",
  year: "2020",
};
const worksDescription = [
  "When the racial conflict was at the boiling point, SpaceX flew out into space. Witnessing that event, I was amazed by the human technological progress, and the word ‘breathtaking’ popped up in my head.",
  "Meanwhile, on Earth, a person who committed a crime but not resisted the arrest lost his life due to police brutality. His last words were ‘I can’t breathe’ and he deceased at the scene, out of breath. ",
  "Within a few days, the opposite things happened in the sky and earth, and I was torn between the wonder of the human technological achievements and the sympathy for a man’s perished life trampled against the ground. Lost somewhere in between, trying to comfort my perplexed mind and smothered heart, I created this poster.",
];
const worksImages = [
  {
    image: projectImage1,
    alt: "icantbreathe-desktop",
  },
];

function IcantbreatheProject() {
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

export default IcantbreatheProject;
