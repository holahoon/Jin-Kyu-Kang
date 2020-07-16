import React from 'react';
import { motion } from 'framer-motion';

import closeButton from '../../assets/images/close-button.svg';

const contactOpenVariants = {
  open: {
    opacity: 0,
    visibility: 'hidden',
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
    opacity: 1,
    visibility: 'visible',
    transition: {
      delay: 0.2,
    },
  },
  closed: {
    opacity: 0,
    visibility: 'hidden',
    transition: {
      delay: 0.1,
    },
  },
};
const closeButtonHover = {
  transform: 'rotate(90deg)',
};

function Contact({ toggleContactMenu, variants, isOpen }) {
  return (
    <>
      <motion.div variants={variants} className='footer__contact-background' />

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
          // className={`footer__contact-button${isOpen ? '--hide' : '--open'}`}
          className={`footer__contact-button--open`}
          onClick={toggleContactMenu}>
          contact
        </motion.div>
      </div>
    </>
  );
}

export default Contact;
