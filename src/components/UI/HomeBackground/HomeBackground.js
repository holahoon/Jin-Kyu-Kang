import React from "react";
import { motion } from "framer-motion";

import blob1 from "../../../assets/images/blob-1.svg";
import blob2 from "../../../assets/images/blob-2.svg";
import blob3 from "../../../assets/images/blob-3.svg";
import intersect1 from "../../../assets/images/Intersect-1.svg";
import intersect2 from "../../../assets/images/Intersect-2.svg";
import intersect3 from "../../../assets/images/Intersect-3.svg";
import intersect4 from "../../../assets/images/intersect-4.svg";
import square from "../../../assets/images/Square.svg";

const trans1 = {
  initial: {
    y: 0,
  },
  animate: {
    y: 6,
    transition: {
      duration: 3,
      ease: "easeOut",
      yoyo: Infinity,
    },
  },
};
const trans2 = {
  initial: {
    y: 0,
  },
  animate: {
    y: 6,
    transition: {
      duration: 4.5,
      delay: 0.5,
      ease: "easeOut",
      yoyo: Infinity,
    },
  },
};
const trans3 = {
  initial: {
    y: 0,
  },
  animate: {
    y: 2,
    transition: {
      duration: 3,
      delay: 0.2,
      ease: "easeInOut",
      yoyo: Infinity,
    },
  },
};
const trans4 = {
  initial: {
    y: 0,
    x: 0,
  },
  animate: {
    y: -6,
    x: 4,
    transition: {
      duration: 4,
      ease: "easeInOut",
      yoyo: Infinity,
    },
  },
};
const trans5 = {
  initial: {
    y: 0,
  },
  animate: {
    y: 4,
    transition: {
      duration: 2.5,
      delay: 0.3,
      ease: "easeInOut",
      yoyo: Infinity,
    },
  },
};
const trans6 = {
  initial: {
    y: 0,
  },
  animate: {
    y: 4,
    transition: {
      duration: 3.2,
      delay: 0.5,
      ease: "easeInOut",
      yoyo: Infinity,
    },
  },
};
const trans7 = {
  initial: {
    y: 0,
  },
  animate: {
    y: 4,
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      yoyo: Infinity,
    },
  },
};
const trans8 = {
  initial: {
    y: 0,
    x: 0,
  },
  animate: {
    y: 8,
    x: 2,
    transition: {
      duration: 4,
      delay: 2,
      ease: "easeInOut",
      yoyo: Infinity,
    },
  },
};

const imageArray = [
  {
    img: {
      name: blob1,
      transition: trans1,
    },
  },
  {
    img: {
      name: blob2,
      transition: trans2,
    },
  },
  {
    img: {
      name: blob3,
      transition: trans3,
    },
  },
  {
    img: {
      name: intersect1,
      transition: trans4,
    },
  },
  {
    img: {
      name: intersect2,
      transition: trans5,
    },
  },
  {
    img: {
      name: intersect3,
      transition: trans6,
    },
  },
  {
    img: {
      name: intersect4,
      transition: trans7,
    },
  },
  {
    img: {
      name: square,
      transition: trans8,
    },
  },
];

function HomeBackground() {
  return (
    <>
      {imageArray.map((each, i) => (
        <motion.img
          key={i}
          variants={each.img.transition}
          className={`home__blurry-image-${i + 1}`}
          src={each.img.name}
          alt={`home-page-${each.img.name}`}
          draggable='false'
        />
      ))}
    </>
  );
}

export default HomeBackground;
