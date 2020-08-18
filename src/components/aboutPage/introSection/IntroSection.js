import React from "react";

function IntroSection({ introductionText }) {
  return (
    <section className='about__intro-section'>
      <h2>{introductionText}</h2>
    </section>
  );
}

export default IntroSection;
