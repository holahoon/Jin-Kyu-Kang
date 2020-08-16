import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ImageSection({ imageList, props }) {
  return (
    <section className='works__horizontal-box'>
      {imageList.map((each) => (
        <Link to={`${props.match.path}/${each.urlName}`} key={each.urlName}>
          <motion.img
            src={each.image}
            className='works__horizontal-box__project-image'
            alt={`works-${each.urlName}`}
            draggable='false'
          />
          <span>{each.title}</span>
        </Link>
      ))}
    </section>
  );
}

export default ImageSection;
