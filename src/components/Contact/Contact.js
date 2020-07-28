import React from 'react';
import { motion } from 'framer-motion';

import closeButton from '../../assets/images/close-button.svg';
import contactImage from '../../assets/images/contact.svg';

const contactOpenVariants = {
  open: {
    transition: {
      delay: 0.1,
    },
  },
  closed: {
    opacity: 1,
    visibility: 'visible',
    transition: {
      delay: 0.4,
    },
  },
};
const contactCloseVariants = {
  open: {
    zIndex: 1,
    opacity: 1,
    visibility: 'visible',
    transition: {
      delay: 0.2,
    },
  },
  closed: {
    zIndex: 0,
    opacity: 0,
    visibility: 'hidden',
    transition: {
      delay: 0.1,
    },
  },
};
const closeButtonHover = {
  rotate: '90deg',
  scale: 1.1,
};
const varr = {
  initial: {
    scale: 1,
    y: 80,
    // cursor: 'default',
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
  animate: {
    scale: 8.5,
    y: 0,
    // cursor: 'default',
    transition: {
      duration: 0.5,
    },
  },
};
const varrg = {
  initial: {
    cursor: 'pointer',
  },
  animate: {
    cursor: 'default',
  },
};

function Contact({ toggleContactMenu, circleVariants, isOpen }) {
  return (
    <>
      <motion.div
        // variants={circleVariants}
        className='footer__contact-background'
      />

      <div className='footer__contact-button'>
        <motion.div
          variants={contactCloseVariants}
          whileHover={closeButtonHover}
          className='footer__contact-button--close'
          onClick={toggleContactMenu}>
          <img src={closeButton} alt='x' />
        </motion.div>

        <motion.div
          variants={contactOpenVariants}
          className={`footer__contact-button--open`}
          // onClick={toggleContactMenu}
        >
          contact
          <motion.svg
            // onClick={!isOpen ? toggleContactMenu : null}
            variants={varr}
            initial='initial'
            animate={isOpen ? 'animate' : 'initial'}
            className='blob'
            style={{ originX: 0.7, originY: 0.5 }}
            // width='200px'
            // viewBox='-100 -180 200 150'
            xmlns='http://www.w3.org/2000/svg'>
            <motion.g
              variants={varrg}
              onClick={!isOpen ? toggleContactMenu : null}>
              <path />
            </motion.g>
          </motion.svg>
        </motion.div>
      </div>
    </>
  );
}

export default Contact;
