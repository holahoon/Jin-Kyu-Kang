import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ProjectContext } from "../../../hooks/ProjectContext";

function ImageSection({ props }) {
  const projectList = useContext(ProjectContext);

  return (
    <section className='works__horizontal-box'>
      {projectList.map((each) => (
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
