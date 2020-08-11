import React from "./node_modules/react";
import { motion } from "./node_modules/framer-motion";

const contactOpenVariants = {
  open: {
    transition: {
      delay: 0.1,
    },
  },
  closed: {
    opacity: 1,
    visibility: "visible",
    transition: {
      delay: 0.4,
    },
  },
};
const contactCloseVariants = {
  open: {
    zIndex: 1,
    opacity: 1,
    visibility: "visible",
    transition: {
      delay: 0.2,
    },
  },
  closed: {
    zIndex: 0,
    opacity: 0,
    visibility: "hidden",
    transition: {
      delay: 0.1,
    },
  },
};
const contactSpanVariants = {
  open: {
    visibility: "hidden",
    zIndex: 0,
    opacity: 0,
  },
  closed: {
    visibility: "visible",
    zIndex: 1,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.2,
      ease: "easeOut",
    },
  },
};
const closeButtonHover = {
  rotate: "90deg",
  scale: 1.5,
};
const contactSvgVariants = {
  initial: {
    scale: 1.5,
    y: 140,
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 50,
    },
  },
  animate: {
    scale: 7.5,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 60,
    },
  },
};
const gVariants = {
  initial: {
    cursor: "pointer",
  },
  animate: {
    cursor: "default",
  },
};

function Contact({ toggleContactMenu, isOpen }) {
  return (
    <>
      <motion.div className='footer__contact-background' />

      <div className='footer__contact-button'>
        <motion.div
          variants={contactCloseVariants}
          whileHover={closeButtonHover}
          className='footer__contact-button--close'
          onClick={toggleContactMenu}
        >
          <svg
            width='30'
            height='30'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M29.8494 7.22189L22.7783 0.150818L15.0001 7.92899L7.22195 0.150818L0.150879 7.22189L7.92905 15.0001L0.150879 22.7782L7.22195 29.8493L15.0001 22.0711L22.7783 29.8493L29.8494 22.7782L22.0712 15.0001L29.8494 7.22189Z'
              fill='white'
            />
          </svg>
        </motion.div>

        <motion.div
          variants={contactOpenVariants}
          className={`footer__contact-button--open`}
        >
          <motion.span
            variants={contactSpanVariants}
            onClick={!isOpen ? toggleContactMenu : null}
          >
            contact
          </motion.span>
          <motion.svg
            variants={contactSvgVariants}
            initial='initial'
            animate={isOpen ? "animate" : "initial"}
            className='blob'
            style={{ originX: 0.7, originY: 0.5 }}
            xmlns='http://www.w3.org/2000/svg'
          >
            <motion.g
              variants={gVariants}
              onClick={!isOpen ? toggleContactMenu : null}
            >
              <path />
            </motion.g>
          </motion.svg>
        </motion.div>
      </div>
    </>
  );
}

export default Contact;
