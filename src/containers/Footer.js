import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";

import Contact from "../components/Contact/Contact";
import Backdrop from "../components/UI/Backdrop/Backdrop";
import Form from "../components/Form/Form";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContactMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  // Function to close contact form after submission
  const closeContactMenuAfterSubmit = (submitState) => {
    submitState && setIsOpen(false);
  };

  return (
    <>
      <Backdrop isOpen={isOpen} toggleContactMenu={toggleContactMenu} />

      <footer className='footer'>
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className='footer__contact'
        >
          <Form
            isOpen={isOpen}
            closeContactMenuAfterSubmit={closeContactMenuAfterSubmit}
          />
          <Contact isOpen={isOpen} toggleContactMenu={toggleContactMenu} />
        </motion.div>
      </footer>
    </>
  );
}

export default Footer;
