import React from "react";

import ProjectPage from "./projectPage/ProjectPage";

import projectImage1 from "../../../assets/images/projects/blob-laboratory/blob_laboratory.png";

const worksTitle = "blob";
const worksSubtitle = {
  text: "Web Design",
  year: "2020",
};
const worksDescription = [""];
const worksImages = [
  {
    image: projectImage1,
    alt: "blob-desktop",
  },
];

function BlobProject() {
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

export default BlobProject;
