import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

import Contact from "../components/Contact/Contact";
import { useDimensions } from "../utilities/useDimensions";
import Backdrop from "../components/UI/Backdrop/Backdrop";
import Form from "../components/Form/Form";

function Footer() {
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
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className='footer__contact'
          >
            <Form />
            <Contact isOpen={isOpen} toggleContactMenu={toggleContactMenu} />
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
