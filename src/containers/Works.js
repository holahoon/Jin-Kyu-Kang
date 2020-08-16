import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ikea from "../assets/images/home-ikea.png";
import bestrong from "../assets/images/home-bestrong.png";
import icantbreathe from "../assets/images/home-icantbreathe.png";
import storyceller from "../assets/images/home-storyceller.png";
import fivie from "../assets/images/home-fivie.png";
import dk from "../assets/images/home-dk.png";
import frame from "../assets/images/home-frame.png";
import ball from "../assets/images/home-ball.png";
import greyed from "../assets/images/home-greyed.png";

const imageArray = [
  {
    urlName: "ikea",
    image: ikea,
  },
  {
    urlName: "bestrong",
    image: bestrong,
  },
  {
    urlName: "icantbreathe",
    image: icantbreathe,
  },
  {
    urlName: "storyceller",
    image: storyceller,
  },
  {
    urlName: "fivie",
    image: fivie,
  },
  {
    urlName: "dk",
    image: dk,
  },
  // {
  //   urlName: "frame",
  //   image: frame,
  // },
  // {
  //   urlName: "ball",
  //   image: ball,
  // },
  // {
  //   urlName: "greyed",
  //   image: greyed,
  // },
];

function Works(props) {
  return (
    <section className='works'>
      <div className='works__horizontal-box'>
        {imageArray.map((each) => (
          <Link to={`${props.match.path}/${each.urlName}`} key={each.urlName}>
            <motion.img
              src={each.image}
              className='works__horizontal-box__project-image'
              alt={`works-${each.urlName}`}
              draggable='false'
            />
            <span>UI/UX</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Works;
