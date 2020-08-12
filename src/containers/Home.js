import React from "react";
import { motion } from "framer-motion";

import HomeBackground from "../components/UI/homeBackground/HomeBackground";
import ProjectLists from "../components/projectLists/ProjectLists";

function Home() {
  return (
    <motion.div initial='initial' animate='animate' className='home'>
      <HomeBackground />

      <ProjectLists />
    </motion.div>
  );
}

export default Home;
