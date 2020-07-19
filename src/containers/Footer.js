import React, { useRef, useState, useCallback } from 'react';
import { motion, useCycle } from 'framer-motion';

import Contact from '../components/Contact/Contact';
import { useDimensions } from '../utilities/useDimensions';
import Backdrop from '../components/UI/Backdrop/Backdrop';
import Form from '../components/Form/Form';
import contactImage from '../assets/images/contact.svg';

const circleVariants = {
  open: (height = 350) => ({
    clipPath: `ellipse(${height * 1.9}px ${height * 1.8}px at 68% 90%)`,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  }),
  closed: {
    clipPath: 'ellipse(100px 60px at 80% 100%)',
    transition: {
      delay: 0.15,
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

function Footer() {
  // const [isOpen, toggleContactOpen] = useCycle(false, true);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const toggleContactMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <>
      <Backdrop isOpen={isOpen} toggleContactMenu={toggleContactMenu} />

      <footer className='footer'>
        <section>
          <motion.div
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
            ref={containerRef}
            className='footer__contact'>
            <Form />
            <Contact
              variants={circleVariants}
              isOpen={isOpen}
              toggleContactMenu={toggleContactMenu}
            />
          </motion.div>

          <div className='footer__language'>
            <span className='footer__language-eng'>eng</span>
            <span className='footer__language-kr'>kr</span>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
