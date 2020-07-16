import React from 'react';
import { motion } from 'framer-motion';

import closeButton from '../../assets/images/close-button.svg';

const contactOpenVariants = {
  open: {
    // transform: 'translate(50%, 100%)',
    opacity: 0,
    visibility: 'hidden',
  },
  closed: {
    // transform: 'translate(50%, 0%)',
    opacity: 1,
    visibility: 'visible',
  },
};

function Contact({ toggleContactMenu, variants, isOpen }) {
  return (
    <>
      <motion.div variants={variants} className='footer__contact-background' />

      <div className='footer__contact-button'>
        <div
          className='footer__contact-button--close'
          onClick={toggleContactMenu}>
          <img src={closeButton} alt='x' />
        </div>

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
