import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import HomeBackground from "../components/UI/HomeBackground/HomeBackground";

function Home() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  const textTopPosition = {
    marginTop: height * 0.48,
  };

  return (
    <motion.div initial='initial' animate='animate' className='home'>
      <HomeBackground />

      <div style={textTopPosition} className='coming-soon'>
        <h1>coming soon</h1>
      </div>
    </motion.div>
  );
}

export default Home;
