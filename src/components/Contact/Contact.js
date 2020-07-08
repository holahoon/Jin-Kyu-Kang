import React from 'react';
import { motion } from 'framer-motion';

const sidebar = {
  open: (height = 250) => ({
    clipPath: `circle(${height * 2}px at 70% 100%)`,
    transition: {
      type: 'spring',
      stiffness: 200,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 100% 100%)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 100,
      damping: 40,
    },
  },
};

function Contact({ toggle, isOpen }) {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      // custom={'300px'}
      className='footer__contact'>
      <motion.div variants={sidebar} className='footer__contact-background' />
      <div className='footer__contact__contact-button'>
        <button onClick={toggle}>Contact</button>
      </div>
    </motion.div>
  );
}

export default Contact;
