import React from "react";

const ikeaDescription =
  "I’ve been moving a lot from New York to D.C., to Philadelphia, then to Austin, and I became a frequent customer of IKEA. Every time I purchased furniture and housewares, the high functionality and relatively accessible prices of IKEA satisfied my needs. I visited many of their stores and bought and used so many products that I got to know the pros and cons of IKEA. Particularly using their app, I found out various aspects to be improved. So I redesigned it analyzing how IKEA can offer upgraded services based on my own experiences.  ";
const bestrongDescription =
  "It’s impossible not to think about racial discrimination being an immigrant myself. Since it’s a deep-rooted issue in this society, I thought time would fade it out, but the tension between ethnic groups escalated day by day. Once more people came out to the streets and raised their voices. The protests remained peaceful but sometimes they were repressed by the police force excessively. Some outraged protesters responded with violence and taking advantage of this chaos, the looters broke into the stores, steal, and destroyed other innocent citizens’ properties. This whole situation raised questions for me. Why do we criticize each other so harshly? Why do we want to get stronger? Does being strong mean to speak up your opinions? Many thoughts crossed my mind. After pondering for a while, I concluded that being strong is not to show off one’s strength or to use it to repress someone, but to be able to maintain one’s stance under any circumstances and to have the inner strength to overcome the obstacles. We all need to look back on ourselves and grow stronger inside first. Be strong.";
const icantbreatheDescription =
  "When the racial conflict was at the boiling point, SpaceX flew out into space. Witnessing that event, I was amazed by the human technological progress, and the word ‘breathtaking’ popped up in my head. Meanwhile, on Earth, a person who committed a crime but not resisted the arrest lost his life due to police brutality. His last words were ‘I can’t breathe’ and he deceased at the scene, out of breath.  Within a few days, the opposite things happened in the sky and earth, and I was torn between the wonder of the human technological achievements and the sympathy for a man’s perished life trampled against the ground. Lost somewhere in between, trying to comfort my perplexed mind and smothered heart, I created this poster.";

const projectDescription = [
  ikeaDescription,
  bestrongDescription,
  icantbreatheDescription,
];

function PreviewDescription({ selectedProject }) {
  function addDot(sentence, count) {
    const sentenceArray = sentence.split(" ");
    return sentenceArray.slice(0, count).join(" ").concat("...");
  }

  return (
    <>
      {projectDescription.map((each, index) =>
        selectedProject === index ? (
          <p key={each} className='project-preview__content-box__description'>
            {addDot(each, 24)}
          </p>
        ) : null
      )}
    </>
  );
}

export default PreviewDescription;
