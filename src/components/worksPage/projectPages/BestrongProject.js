import React from "react";

import ProjectPage from "./projectPage/ProjectPage";

import projectImage from "../../../assets/images/home-dk.png";

const worksTitle = "be strong";
const worksSubtitle = {
  text: "Visual Design",
  year: "2020",
};
const worksDescription = [
  "It’s impossible not to think about racial discrimination being an immigrant myself. Since it’s a deep-rooted issue in this society, I thought time would fade it out, but the tension between ethnic groups escalated day by day. Once more people came out to the streets and raised their voices. The protests remained peaceful but sometimes they were repressed by the police force excessively. Some outraged protesters responded with violence and taking advantage of this chaos, the looters broke into the stores, steal, and destroyed other innocent citizens’ properties.",
  "This whole situation raised questions for me. Why do we criticize each other so harshly? Why do we want to get stronger? Does being strong mean to speak up your opinions? Many thoughts crossed my mind. After pondering for a while, I concluded that being strong is not to show off one’s strength or to use it to repress someone, but to be able to maintain one’s stance under any circumstances and to have the inner strength to overcome the obstacles.",
  "We all need to look back on ourselves and grow stronger inside first. Be strong.",
];
const worksImage = projectImage;

function bestrongProject() {
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

export default bestrongProject;
