import React from "react";
import { motion } from "framer-motion";

import HomeBackground from "../components/UI/HomeBackground/HomeBackground";

function Home() {
  return (
    <motion.div initial='initial' animate='animate' className='home'>
      <HomeBackground />

      <div className='coming-soon'>
        <h1>coming soon</h1>
      </div>
    </motion.div>
  );
}

export default Home;
