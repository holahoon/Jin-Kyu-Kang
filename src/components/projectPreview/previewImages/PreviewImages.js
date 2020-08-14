import React from "react";
import { motion } from "framer-motion";

import ikea from "../../../assets/images/home-ikea.png";
import bestrong from "../../../assets/images/home-bestrong.png";
import icantbreathe from "../../../assets/images/home-icantbreathe.png";
import storyceller from "../../../assets/images/home-storyceller.png";
import fivie from "../../../assets/images/home-fivie.png";
import dk from "../../../assets/images/home-dk.png";
import frame from "../../../assets/images/home-bestrong.png";
import ball from "../../../assets/images/home-ball.png";
import greyed from "../../../assets/images/home-greyed.png";

const imageArray = [
  ikea,
  bestrong,
  icantbreathe,
  storyceller,
  fivie,
  dk,
  frame,
  ball,
  greyed,
];

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
