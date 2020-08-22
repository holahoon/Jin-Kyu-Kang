import React from "react";
import { motion } from "framer-motion";

const sentenceVariants = {
  initial: {
    opacity: 0.8,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

function PreviewDescription({ selectedProject, projectList }) {
  function addDot(sentence, count) {
    if (sentence.length > 0) {
      const sentenceArray = sentence.split(" ");
      return sentenceArray.slice(0, count).join(" ").concat("...");
    }
  }

  return (
    <>
      {projectList.map((each, index) =>
        selectedProject === index ? (
          <motion.p
            variants={sentenceVariants}
            initial='initial'
            animate='animate'
            key={each.projectDescription}
            className='project-preview__content-box__description'
          >
            {addDot(each.projectDescription, 24)}
          </motion.p>
        ) : null
      )}
    </>
  );
}

export default PreviewDescription;
