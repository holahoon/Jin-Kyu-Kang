import React from 'react';
import { motion, useCycle } from 'framer-motion';

import Contact from '../components/Contact/Contact';

// const sidebar = {
//   open: (height = 300) => ({
//     clipPath: `circle(${height * 2}px at 0px 0px)`,
//     transition: {
//       type: 'spring',
//       stiffness: 20,
//       restDelta: 2,
//     },
//   }),
//   closed: {
//     clipPath: 'circle(30px at 40px 40px)',
//     transition: {
//       delay: 0.5,
//       type: 'spring',
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };

function Footer() {
  const [isOpen, toggleContactOpen] = useCycle(false, true);

  return (
    <footer className='footer'>
      <section>
        <Contact isOpen={isOpen} toggle={toggleContactOpen} />

        <div className='footer__language'>
          <span className='footer__language-eng'>eng</span>
          <span className='footer__language-kr'>kr</span>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
