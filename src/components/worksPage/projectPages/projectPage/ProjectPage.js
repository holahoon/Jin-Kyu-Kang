import React from "react";

function ProjectPage({
  worksTitle,
  worksSubtitle,
  worksDescription,
  worksImage,
}) {
  return (
    <div className='works__project'>
      <h2 className='works__project__title'>{worksTitle}</h2>
      <h4 className='works__project__subtitle'>
        <span className='text'>{worksSubtitle.text}</span>
        <span className='year'>{worksSubtitle.year}</span>
      </h4>

      <div className='works__project__image'>
        {worksDescription.map((each, index) => (
          <p key={`${each}-${index}`}>{each}</p>
        ))}
      </div>

      <div>
        <img src={worksImage.image} alt={worksImage.alt} />
      </div>
    </div>
  );
}

export default ProjectPage;
