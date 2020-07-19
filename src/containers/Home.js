import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import blob1 from '../assets/images/blob-1.svg';
import blob2 from '../assets/images/blob-2.svg';
import blob3 from '../assets/images/blob-3.svg';
import intersect1 from '../assets/images/Intersect-1.svg';
import intersect2 from '../assets/images/Intersect-2.svg';
import intersect3 from '../assets/images/Intersect-3.svg';
import intersect4 from '../assets/images/intersect-4.svg';
import square from '../assets/images/Square.svg';

const trans1 = {
  initial: {
    y: 0,
  },
  animate: {
    y: 6,
    transition: {
      duration: 1.2,
      ease: 'easeIn',
      yoyo: Infinity,
    },
  },
};
const trans2 = {
  initial: {
    y: 0,
  },
  animate: {
    y: 6,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: 'easeIn',
      yoyo: Infinity,
    },
  },
};
const trans3 = {
  initial: {
    y: 0,
  },
  animate: {
    y: 4,
    transition: {
      duration: 0.8,
      delay: 0.7,
      ease: 'easeInOut',
      yoyo: Infinity,
    },
  },
};
const trans4 = {
  initial: {
    y: 0,
  },
  animate: {
    y: 4,
    transition: {
      duration: 0.8,
      delay: 0.7,
      ease: 'easeInOut',
      yoyo: Infinity,
    },
  },
};
const trans5 = {
  initial: {
    y: 0,
  },
  animate: {
    y: 4,
    transition: {
      duration: 0.8,
      delay: 0.7,
      ease: 'easeInOut',
      yoyo: Infinity,
    },
  },
};
const trans6 = {
  initial: {
    y: 0,
  },
  animate: {
    y: 4,
    transition: {
      duration: 0.8,
      delay: 0.7,
      ease: 'easeInOut',
      yoyo: Infinity,
    },
  },
};
const trans7 = {
  initial: {
    y: 0,
  },
  animate: {
    y: 4,
    transition: {
      duration: 0.8,
      delay: 0.7,
      ease: 'easeInOut',
      yoyo: Infinity,
    },
  },
};
const trans8 = {
  initial: {
    y: 0,
  },
  animate: {
    y: 4,
    transition: {
      duration: 0.8,
      delay: 0.7,
      ease: 'easeInOut',
      yoyo: Infinity,
    },
  },
};

const imageArray = [
  {
    img: {
      name: blob1,
      trans: trans1,
    },
  },
  {
    img: {
      name: blob2,
      trans: trans2,
    },
  },
  {
    img: {
      name: blob3,
      trans: trans3,
    },
  },
  {
    img: {
      name: intersect1,
      trans: trans4,
    },
  },
  {
    img: {
      name: intersect2,
      trans: trans5,
    },
  },
  {
    img: {
      name: intersect3,
      trans: trans6,
    },
  },
  {
    img: {
      name: intersect4,
      trans: trans7,
    },
  },
  {
    img: {
      name: square,
      trans: trans8,
    },
  },
];

function Home() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  const textTopPosition = {
    marginTop: height * 0.47,
  };

  return (
    <motion.div initial='initial' animate='animate' className='home'>
      {imageArray.map((img, i) => (
        <motion.img
          key={i}
          variants={img.img.trans}
          className={`home__blurry-image-${i + 1}`}
          src={img.img.name}
          alt={`home-page-${img.img.name}`}
        />
      ))}
      {/* <motion.img
        variants={trans1}
        className='home__blurry-image-1'
        src={blob1}
        alt='home-page-blob1'
      />
      <img className='home__blurry-image-2' src={blob2} alt='home-page-blob2' />
      <img className='home__blurry-image-3' src={blob3} alt='home-page-blob3' />
      <motion.img
        variants={trans2}
        className='home__blurry-image-4'
        src={intersect1}
        alt='home-page-inter1'
      />
      <motion.img
        className='home__blurry-image-5'
        src={intersect2}
        alt='home-page-inter2'
      />
      <img
        className='home__blurry-image-6'
        src={intersect3}
        alt='home-page-inter3'
      />
      <img
        className='home__blurry-image-7'
        src={intersect4}
        alt='home-page-inter4'
      />
      <motion.img
        variants={trans3}
        className='home__blurry-image-8'
        src={square}
        alt='home-page-square'
      /> */}

      <div style={textTopPosition} className='coming-soon'>
        <h1>coming soon</h1>
      </div>
    </motion.div>
  );
}

export default Home;
