import React from "react";
import { motion } from "framer-motion";

import icantbreathe from "../../../assets/images/home-icantbreathe.png";
import ikea from "../../../assets/images/home-ikea.png";
import bestrong from "../../../assets/images/home-bestrong.png";

const imageArray = [ikea, bestrong, icantbreathe];

function PreviewImages({ selectedProject }) {
  return (
    <>
      {imageArray.map((each, index) => (
        <motion.img
          key={index}
          className={`project-preview__image-box__image${
            selectedProject === index ? " project-selected" : ""
          }`}
          src={each}
          alt={`homepage-project-preview-${each}`}
          draggable='false'
        />
      ))}
    </>
  );
}

export default PreviewImages;
