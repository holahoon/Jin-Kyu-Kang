import React from "react";
import { Link } from "react-router-dom";

function ImageSection({ imageList, props }) {
  return (
    <section className='works__horizontal-box'>
      {imageList.map((each) => (
        <Link to={`${props.match.path}/${each.urlName}`} key={each.urlName}>
          <img
            src={each.image}
            className='works__horizontal-box__project-image'
            alt={`works-${each.urlName}`}
            draggable='false'
          />
          <span className='project-category'>
            {each.projectName} : {each.category}
          </span>
        </Link>
      ))}
    </section>
  );
}

export default ImageSection;
