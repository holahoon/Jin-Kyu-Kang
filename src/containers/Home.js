import React, { useState } from "react";
import { motion } from "framer-motion";

import HomeBackground from "../components/UI/HomeBackground/HomeBackground";
import ProjectLists from "../components/projectLists/ProjectLists";
import ProjectPreview from "../components/projectPreview/ProjectPreview";

const homepageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1.5,
    },
  },
  exitAnimate: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

function Home({ projectList }) {
  const [selectedProject, setSelectedProject] = useState(0);

  function projectSelectionHandler(index) {
    setSelectedProject(index);
  }

  return (
    <motion.div
      variants={homepageVariants}
      initial='initial'
      animate='animate'
      exit='exitAnimate'
      className='home'
    >
      <HomeBackground />

      <ProjectLists
        projectList={projectList}
        selectedProject={selectedProject}
        projectSelectionHandler={projectSelectionHandler}
      />

      <ProjectPreview
        selectedProject={selectedProject}
        projectList={projectList}
      />
    </motion.div>
  );
}

export default Home;
