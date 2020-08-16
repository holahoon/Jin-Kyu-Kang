import React, { useState } from "react";
import { motion } from "framer-motion";

import HomeBackground from "../components/UI/homeBackground/HomeBackground";
import ProjectLists from "../components/projectLists/ProjectLists";
import ProjectPreview from "../components/projectPreview/ProjectPreview";

const projectList = [
  "IKEA",
  "be strong",
  "icantbreathe",
  "Storyceller",
  "FIVIE",
  "dk",
  "FRAME",
  "ball.",
  "greyed",
];

function Home() {
  const [selectedProject, setSelectedProject] = useState(0);

  function projectSelectionHandler(index) {
    setSelectedProject(index);
  }

  return (
    <motion.div initial='initial' animate='animate' className='home'>
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
