import React from 'react';
import { motion } from 'framer-motion';

// import backdropImage from '../../assets/images/backdrop-wall.svg';

const backdropVariant = {
  hidden: {
    opacity: 0,
    zIndex: -1,
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
  show: {
    opacity: 1,
    zIndex: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
    },
  },
};

function Backdrop({ isOpen }) {
  return (
    <motion.div
      variants={backdropVariant}
      initial={false}
      animate={isOpen ? 'show' : 'hidden'}
      className='backdrop'></motion.div>
  );
}

export default Backdrop;