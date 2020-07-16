import React, { useRef, useState, useCallback } from 'react';
import { motion, useCycle } from 'framer-motion';

import Contact from '../components/Contact/Contact';
import { useDimensions } from '../utilities/useDimensions';
import Backdrop from '../components/UI/Backdrop/Backdrop';
import Form from '../components/Form/Form';
// import circle from '../assets/images/Vector-circle.svg';

// const path =
//   'M1173.34 598.529C1174.45 672.995 1186.1 749.568 1160.99 819.708C1135.76 890.168 1081.82 945.852 1029.71 999.68C978.307 1052.77 922.19 1101.43 856.09 1134.62C789.88 1167.87 717.684 1189.75 643.647 1193.55C570.544 1197.3 499.303 1177.21 429.105 1156.53C359.286 1135.96 290.187 1112.47 229.987 1071.65C168.664 1030.07 111.236 979.981 74.245 915.894C37.5168 852.262 30.2143 777.22 18.2315 704.783C6.3956 633.232 -6.52566 561.364 3.72166 489.57C14.1216 416.708 39.065 346.005 78.336 283.688C117.524 221.503 173.785 173.048 231.747 127.727C290.247 81.9857 350.564 36.1485 421.846 15.0937C493.323 -6.01869 569.193 -0.922438 643.404 6.13476C717.516 13.1826 790.478 27.5754 858.972 56.6628C929.197 86.485 998.681 122.599 1050.1 178.845C1101.51 235.089 1132.99 306.845 1154.44 379.879C1175.23 450.688 1172.24 524.755 1173.34 598.529Z';

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
      <Backdrop isOpen={isOpen} />

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
