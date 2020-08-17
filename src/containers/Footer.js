import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";

import Contact from "../components/contact/Contact";
import Backdrop from "../components/UI/backdrop/Backdrop";
import Form from "../components/form/Form";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContactMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <>
      <Backdrop isOpen={isOpen} toggleContactMenu={toggleContactMenu} />

      <footer className='footer'>
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className='footer__contact'
        >
          <Form isOpen={isOpen} />
          <Contact isOpen={isOpen} toggleContactMenu={toggleContactMenu} />
        </motion.div>
      </footer>
    </>
  );
}

export default Footer;
