import React, { useState, useEffect } from "./node_modules/react";
import { motion } from "./node_modules/framer-motion";
import * as emailjs from "./node_modules/emailjs-com";

import arrow1 from "../../assets/images/send-arrow-1.svg";
import arrow2 from "../../assets/images/send-arrow-2.svg";

const formVariants = {
  open: {
    display: "block",
  },
  closed: {
    display: "none",
    transition: {
      delay: 0.2,
    },
  },
};
const inputVariants = {
  open: {
    visibility: "visible",
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
  closed: {
    visibility: "hidden",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
};
const submitHover1 = {
  hover: {
    x: 7,
    transition: {
      duration: 0.1,
    },
  },
};
const submitHover2 = {
  hover: {
    x: 7,
    transition: {
      delay: 0.1,
    },
  },
};
const sentButtonVariants = {
  initial: {
    visibility: "hidden",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  animate: {
    visibility: "visible",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const sentVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
const exclamVariants = {
  initial: {
    rotate: "45deg",
    opacity: 0,
  },
  animate: {
    rotate: "0deg",
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 500,
    },
  },
};

/*
 * TODO: Refactor and split into components
 */

function Form({ isOpen }) {
  const [inputInfo, setInputInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [formSubmitSuccess, setFormSubmitSuccess] = useState(false);

  useEffect(() => {
    // Reset the form when contact menu is closed or form is successfully submitted
    (isOpen || formSubmitSuccess) &&
      setInputInfo({ name: "", email: "", message: "" });
    (isOpen || formSubmitSuccess) && setErrors({});
  }, [formSubmitSuccess, isOpen]);

  function emailJsHandler(e) {
    let isValid = validate();
    // Tried using environment variable to hide the key and added in gitignore file. This causes the github to ignore the value which returns undefine
    const USER_ID = process.env.REACT_APP_USER_ID;
    const EMAIL_TYPE = "gmail";
    const TEMPLATE_ID = "jinkyu_kang";

    if (isValid) {
      emailjs.sendForm(EMAIL_TYPE, TEMPLATE_ID, e.target, USER_ID).then(
        (response) => {
          if (response.status === 200) {
            setFormSubmitSuccess(true);
          }
        },
        (error) => {
          setFormSubmitSuccess(false);
        }
      );
    }
  }

  function validate() {
    let isValid = true;
    let copiedErrors = { ...errors };

    for (let key in inputInfo) {
      if (inputInfo[key] === "") {
        copiedErrors = { ...copiedErrors, [key]: true };
        setErrors(copiedErrors);
        isValid = isValid && false;
      } else {
        copiedErrors = { ...copiedErrors, [key]: false };
        setErrors(copiedErrors);
        isValid = isValid && true;
      }
    }
    return isValid;
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputInfo({
      ...inputInfo,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    emailJsHandler(e);
  };

  let sendButton = (
    <motion.div className='footer__form__send' variants={inputVariants}>
      <span
        className={`footer__form__error-message${
          errors.name || errors.email || errors.message ? "--active" : ""
        }`}
      >
        "Please enter all the fields"
      </span>
      <motion.button whileHover='hover' type='submit'>
        <motion.svg
          width='124'
          height='36'
          viewBox='0 0 124 36'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M25 15.3001L21 18.3501C20.9 18.4001 20.75 18.4501 20.6 18.3501C19.35 17.3501 11.65 11.2001 10.7 11.6501C9.9 12.0501 8.75 17.3001 9.15 17.7001C9.95 18.4501 23.55 22.6501 24.15 23.6501C24.9 24.8501 23.75 31.1001 23.3 32.0001C22.85 32.9501 13.8 35.8501 12.3 35.4501C9.1 34.6501 2.6 30.6501 1.15 29.7501C1 29.6501 0.95 29.4501 1.05 29.3001L4 25.4501C4.1 25.3001 4.25 25.3001 4.35 25.4001C6.1 26.3501 17.15 32.6501 17.7 32.5001C18.25 32.3001 18.45 27.1001 18.2 26.6501C17.95 26.2501 3.4 21.3501 2.95 20.7501C2.5 20.1501 3.6 12.0001 4.05 11.3001C4.5 10.6501 15.65 9.10006 17 9.45006C18.15 9.75006 23.55 13.7001 25 14.8001C25.2 14.9501 25.2 15.1501 25 15.3001ZM53.6684 24.8001C52.1684 26.5501 46.1684 32.6501 45.6184 32.6501C44.9684 32.6501 35.3184 25.9501 35.1684 25.7501C34.9684 25.6001 35.0684 24.7001 35.0684 24.7001C35.0684 24.7001 55.5684 19.7001 55.8184 19.1001C56.0184 18.6001 50.3184 10.6501 49.3684 10.1001C48.3184 9.45006 38.3684 9.55006 37.8684 9.90006C37.3684 10.2001 30.5684 15.3001 30.0684 16.0501C29.5684 16.8001 28.1184 27.6001 28.3684 28.4501C28.6184 29.2501 37.8184 34.8501 38.4184 35.0501C38.9684 35.2501 46.9684 35.5001 47.5184 35.2001C48.0184 34.9001 54.1184 28.6501 56.1184 26.6001C56.3184 26.4001 56.2684 26.0501 56.0184 25.8501L54.2684 24.7001C54.0684 24.6001 53.8184 24.6501 53.6684 24.8001ZM36.1184 18.8501C36.5684 18.0501 43.6684 12.9001 43.6684 12.9001C44.2684 13.0501 48.1184 18.3501 48.1184 18.3501L35.3184 21.9001C35.3184 21.9001 35.7184 19.7001 36.1184 18.8501ZM91.0512 34.2501L86.9512 30.1001C86.9512 25.1501 86.9012 18.0501 86.6512 17.1001C86.3012 15.7501 82.8512 10.4001 81.5012 10.0001C80.1012 9.60006 74.8012 9.60006 73.1512 9.80006C72.4512 9.90006 70.7512 11.0501 69.1512 13.3001V10.3001C69.1512 10.1501 69.0012 10.0001 68.8512 10.0001H59.2012C58.7512 10.0001 58.6012 10.5001 58.9012 10.8001L62.7012 14.2001V30.0501L58.5512 34.2501C58.2512 34.5501 58.4512 35.0001 58.8512 35.0001H73.0012C73.4012 35.0001 73.6012 34.5501 73.3012 34.2501L69.1512 30.0501V19.3001C70.5012 15.4501 74.4512 12.0001 75.7012 11.8501C76.9512 11.7001 79.5012 16.8501 79.6512 17.9001C79.7012 18.4001 79.8512 25.2001 79.9012 30.0501L75.7512 34.2501C75.4512 34.5501 75.6512 35.0001 76.0512 35.0001H90.7512C91.1512 35.0001 91.3512 34.5501 91.0512 34.2501ZM123.077 34.3001L119.077 30.2501V0.80006C119.077 0.650059 118.927 0.500058 118.777 0.500058H108.977C108.577 0.500058 108.377 0.950058 108.677 1.25006L112.627 5.25006V15.0501C110.777 12.7001 108.727 11.0001 108.027 10.8501C106.727 10.6001 101.577 10.6501 100.377 10.9501C99.1773 11.2501 92.1773 20.5001 92.5273 23.0501C92.8273 25.4001 98.5273 34.5501 99.9773 34.9501C101.377 35.3501 107.277 35.3501 108.927 35.1501C109.727 35.0501 111.227 33.5001 112.627 31.4501V34.7501C112.627 34.9001 112.777 35.0501 112.927 35.0501H122.777C123.177 35.0501 123.377 34.6001 123.077 34.3001ZM105.777 33.2501C104.527 33.3001 99.6273 23.9501 99.5273 22.4001C99.4273 20.9001 104.627 12.7501 105.677 12.7001C107.527 12.6001 112.627 17.9501 112.627 21.7501V23.6001C112.627 28.8501 107.527 33.2001 105.777 33.2501Z'
            fill='white'
          />
        </motion.svg>

        <motion.img variants={submitHover1} src={arrow1} alt='send arrow 1' />
        <motion.img variants={submitHover2} src={arrow2} alt='send arrow 2' />
      </motion.button>
    </motion.div>
  );
  if (formSubmitSuccess) {
    sendButton = (
      <motion.div
        className='footer__form__sent'
        initial='initial'
        animate={formSubmitSuccess ? "animate" : null}
        variants={sentButtonVariants}
      >
        <motion.svg
          variants={sentVariants}
          width='109'
          height='35'
          viewBox='0 0 109 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M25 14.3L21 17.35C20.9 17.4 20.75 17.45 20.6 17.35C19.35 16.35 11.65 10.2 10.7 10.65C9.9 11.05 8.75 16.3 9.15 16.7C9.95 17.45 23.55 21.65 24.15 22.65C24.9 23.85 23.75 30.1 23.3 31C22.85 31.95 13.8 34.85 12.3 34.45C9.1 33.65 2.6 29.65 1.15 28.75C1 28.65 0.95 28.45 1.05 28.3L4 24.45C4.1 24.3 4.25 24.3 4.35 24.4C6.1 25.35 17.15 31.65 17.7 31.5C18.25 31.3 18.45 26.1 18.2 25.65C17.95 25.25 3.4 20.35 2.95 19.75C2.5 19.15 3.6 11 4.05 10.3C4.5 9.65 15.65 8.1 17 8.45C18.15 8.75 23.55 12.7 25 13.8C25.2 13.95 25.2 14.15 25 14.3ZM53.6684 23.8C52.1684 25.55 46.1684 31.65 45.6184 31.65C44.9684 31.65 35.3184 24.95 35.1684 24.75C34.9684 24.6 35.0684 23.7 35.0684 23.7C35.0684 23.7 55.5684 18.7 55.8184 18.1C56.0184 17.6 50.3184 9.65 49.3684 9.1C48.3184 8.45 38.3684 8.55 37.8684 8.9C37.3684 9.2 30.5684 14.3 30.0684 15.05C29.5684 15.8 28.1184 26.6 28.3684 27.45C28.6184 28.25 37.8184 33.85 38.4184 34.05C38.9684 34.25 46.9684 34.5 47.5184 34.2C48.0184 33.9 54.1184 27.65 56.1184 25.6C56.3184 25.4 56.2684 25.05 56.0184 24.85L54.2684 23.7C54.0684 23.6 53.8184 23.65 53.6684 23.8ZM36.1184 17.85C36.5684 17.05 43.6684 11.9 43.6684 11.9C44.2684 12.05 48.1184 17.35 48.1184 17.35L35.3184 20.9C35.3184 20.9 35.7184 18.7 36.1184 17.85ZM91.0512 33.25L86.9512 29.1C86.9512 24.15 86.9012 17.05 86.6512 16.1C86.3012 14.75 82.8512 9.4 81.5012 9C80.1012 8.6 74.8012 8.6 73.1512 8.8C72.4512 8.9 70.7512 10.05 69.1512 12.3V9.3C69.1512 9.15 69.0012 9 68.8512 9H59.2012C58.7512 9 58.6012 9.5 58.9012 9.8L62.7012 13.2V29.05L58.5512 33.25C58.2512 33.55 58.4512 34 58.8512 34H73.0012C73.4012 34 73.6012 33.55 73.3012 33.25L69.1512 29.05V18.3C70.5012 14.45 74.4512 11 75.7012 10.85C76.9512 10.7 79.5012 15.85 79.6512 16.9C79.7012 17.4 79.8512 24.2 79.9012 29.05L75.7512 33.25C75.4512 33.55 75.6512 34 76.0512 34H90.7512C91.1512 34 91.3512 33.55 91.0512 33.25ZM108.345 11.8V9.35C108.345 9.2 108.195 9.05 108.045 9.05H100.345C100.395 4.7 100.345 1.7 100.345 0.799998C100.345 0.649997 100.195 0.499999 100.045 0.499999H97.4949C97.3949 0.499999 97.2949 0.599998 97.2449 0.7C95.6949 6.9 91.1949 9 88.4949 9.65C88.3949 9.7 88.2949 9.85 88.2949 9.95V11.8C88.2949 11.95 88.4449 12.1 88.5949 12.1H93.9949C93.9449 17.8 93.9949 24.95 93.9949 25.45C94.0449 27.55 101.745 32.85 102.895 33.7C103.895 34.4 107.095 34.25 108.045 34.2C108.245 34.2 108.345 34.05 108.345 33.9V28.2C108.345 28.05 108.195 27.85 107.995 27.9C106.595 28 101.145 28.3 100.345 27.45C99.7949 26.9 100.195 19.75 100.345 12.1H108.045C108.195 12.1 108.345 11.95 108.345 11.8Z'
            fill='white'
          />
        </motion.svg>
        <motion.svg
          variants={exclamVariants}
          style={{ originX: 0.5, originY: 1 }}
          width='10'
          height='36'
          viewBox='0 0 10 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2 0.499999V22H7.6V0.499999H2ZM4.4 35.05L0.65 31.3C0.45 31.05 0.45 30.75 0.65 30.55L4.4 26.8C4.6 26.55 4.95 26.55 5.15 26.8L8.9 30.55C9.1 30.75 9.1 31.05 8.9 31.3L5.15 35.05C4.95 35.25 4.6 35.25 4.4 35.05Z'
            fill='white'
          />
        </motion.svg>
      </motion.div>
    );
  }

  return (
    <motion.form
      variants={formVariants}
      className='footer__form'
      autoComplete='off'
      onSubmit={submitHandler}
    >
      <motion.label variants={inputVariants} className='footer__form__name'>
        <span className={"footer__form__name__inner"}>
          <svg
            viewBox='0 0 101 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='101' height='50' fill='black' fillOpacity='1' />
            <path
              d='M22.31 33.55L19.85 31.06C19.85 28.09 19.82 23.83 19.67 23.26C19.46 22.45 17.39 19.24 16.58 19C15.74 18.76 12.56 18.76 11.57 18.88C11.15 18.94 10.13 19.63 9.17 20.98V19.18C9.17 19.09 9.08 19 8.99 19H3.2C2.93 19 2.84 19.3 3.02 19.48L5.3 21.52V31.03L2.81 33.55C2.63 33.73 2.75 34 2.99 34H11.48C11.72 34 11.84 33.73 11.66 33.55L9.17 31.03V24.58C9.98 22.27 12.35 20.2 13.1 20.11C13.85 20.02 15.38 23.11 15.47 23.74C15.5 24.04 15.59 28.12 15.62 31.03L13.13 33.55C12.95 33.73 13.07 34 13.31 34H22.13C22.37 34 22.49 33.73 22.31 33.55ZM39.8947 33.55L37.4347 31.06V23.65C37.4347 23.38 37.3147 23.14 37.1347 22.96C36.2047 22.03 32.8747 19.18 31.0147 18.97C28.8547 18.7 23.5447 21.79 22.8847 22.24C22.7047 22.36 22.7647 22.57 22.7947 22.63L24.3547 25.48C24.4147 25.6 24.5047 25.6 24.6247 25.54C25.9147 24.73 32.4547 20.74 33.2047 21.25C33.5947 21.55 33.5947 23.26 33.5947 24.13C32.4847 24.49 26.2447 26.8 24.0547 28.42C23.5447 28.78 23.1847 29.56 23.2147 29.98C23.3347 30.64 25.1347 33.85 25.5247 33.97C25.8847 34.09 28.1947 34.15 28.6447 33.88C29.0347 33.64 32.6647 29.71 33.5047 28.39L33.4147 33.67C33.4147 33.85 33.5647 34 33.7447 34H39.7147C39.9547 34 40.0747 33.73 39.8947 33.55ZM28.1947 31.69C27.7147 31.66 26.9647 29.92 27.3247 29.2C28.1647 27.55 31.8547 26.53 33.5347 25.69V25.72C32.6647 27.34 28.7047 31.75 28.1947 31.69ZM70.7403 33.55L68.2503 31.03C68.2503 28.06 68.2203 23.8 68.0703 23.23C67.8603 22.42 65.7903 19.18 64.9803 18.97C64.1403 18.76 60.9603 18.73 59.9703 18.85C59.4303 18.91 58.2303 20.08 57.3003 22.27C56.5803 20.98 55.2603 19.12 54.6603 18.97C53.8203 18.76 50.6403 18.73 49.6503 18.85C49.2303 18.91 48.3903 19.63 47.5803 21.04V19.3C47.5803 19.12 47.4603 19 47.2803 19H41.5803C41.3403 19 41.2203 19.27 41.4003 19.45L43.6803 21.55V31.09L43.6203 31.03L41.1303 33.55C40.9503 33.73 41.0703 34 41.3103 34H49.9203C50.1603 34 50.2803 33.73 50.1003 33.55L47.6103 31.03L47.5803 31.06V26.02C47.5803 23.2 50.2803 20.2 51.1803 20.08C51.9303 19.99 53.4603 23.08 53.5503 23.71C53.5803 24.01 53.6703 28.12 53.7303 31.03L51.2403 33.55C51.0603 33.73 51.1803 34 51.4203 34H60.2103C60.4503 34 60.5703 33.73 60.3903 33.55L57.9303 31.06C57.9303 29.5 57.9303 27.58 57.9003 26.02C57.9003 23.2 60.6003 20.2 61.5003 20.08C62.2503 19.99 63.7803 23.08 63.8703 23.71C63.9003 24.01 63.9903 28.12 64.0503 31.03L61.5603 33.55C61.3803 33.73 61.5003 34 61.7403 34H70.5603C70.8003 34 70.9203 33.73 70.7403 33.55ZM86.8334 27.88C85.9334 28.93 82.3334 32.59 82.0034 32.59C81.6134 32.59 75.8234 28.57 75.7334 28.45C75.6134 28.36 75.6734 27.82 75.6734 27.82C75.6734 27.82 87.9734 24.82 88.1234 24.46C88.2434 24.16 84.8234 19.39 84.2534 19.06C83.6234 18.67 77.6534 18.73 77.3534 18.94C77.0534 19.12 72.9734 22.18 72.6734 22.63C72.3734 23.08 71.5034 29.56 71.6534 30.07C71.8034 30.55 77.3234 33.91 77.6834 34.03C78.0134 34.15 82.8134 34.3 83.1434 34.12C83.4434 33.94 87.1034 30.19 88.3034 28.96C88.4234 28.84 88.3934 28.63 88.2434 28.51L87.1934 27.82C87.0734 27.76 86.9234 27.79 86.8334 27.88ZM76.3034 24.31C76.5734 23.83 80.8334 20.74 80.8334 20.74C81.1934 20.83 83.5034 24.01 83.5034 24.01L75.8234 26.14C75.8234 26.14 76.0634 24.82 76.3034 24.31ZM93.3931 23.95L91.1431 21.7C91.0231 21.55 91.0231 21.37 91.1431 21.25L93.3931 19C93.5131 18.85 93.7231 18.85 93.8431 19L96.0931 21.25C96.2131 21.37 96.2131 21.55 96.0931 21.7L93.8431 23.95C93.7231 24.07 93.5131 24.07 93.3931 23.95ZM93.3931 33.01L91.1431 30.76C91.0231 30.61 91.0231 30.43 91.1431 30.31L93.3931 28.06C93.5131 27.91 93.7231 27.91 93.8431 28.06L96.0931 30.31C96.2131 30.43 96.2131 30.61 96.0931 30.76L93.8431 33.01C93.7231 33.13 93.5131 33.13 93.3931 33.01Z'
              fill='white'
            />
          </svg>

          <input
            type='text'
            placeholder=''
            name='name'
            value={inputInfo.name}
            autoComplete='off'
            onChange={(e) => onChangeHandler(e)}
          />
        </span>
        {/* <span
          className={`footer__form__error-message${
            errors.name ? "--active" : ""
          }`}
        >
          "I need your name"
        </span> */}
      </motion.label>
      <motion.label variants={inputVariants} className='footer__form__email'>
        <span className={"footer__form__email__inner"}>
          <svg
            viewBox='0 0 100 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='100' height='50' fill='black' fillOpacity='1' />
            <path
              d='M17.81 27.88C16.91 28.93 13.31 32.59 12.98 32.59C12.59 32.59 6.8 28.57 6.71 28.45C6.59 28.36 6.65 27.82 6.65 27.82C6.65 27.82 18.95 24.82 19.1 24.46C19.22 24.16 15.8 19.39 15.23 19.06C14.6 18.67 8.63 18.73 8.33 18.94C8.03 19.12 3.95 22.18 3.65 22.63C3.35 23.08 2.48 29.56 2.63 30.07C2.78 30.55 8.3 33.91 8.66 34.03C8.99 34.15 13.79 34.3 14.12 34.12C14.42 33.94 18.08 30.19 19.28 28.96C19.4 28.84 19.37 28.63 19.22 28.51L18.17 27.82C18.05 27.76 17.9 27.79 17.81 27.88ZM7.28 24.31C7.55 23.83 11.81 20.74 11.81 20.74C12.17 20.83 14.48 24.01 14.48 24.01L6.8 26.14C6.8 26.14 7.04 24.82 7.28 24.31ZM50.3497 33.55L47.8597 31.03C47.8597 28.06 47.8297 23.8 47.6797 23.23C47.4697 22.42 45.3997 19.18 44.5897 18.97C43.7497 18.76 40.5697 18.73 39.5797 18.85C39.0397 18.91 37.8397 20.08 36.9097 22.27C36.1897 20.98 34.8697 19.12 34.2697 18.97C33.4297 18.76 30.2497 18.73 29.2597 18.85C28.8397 18.91 27.9997 19.63 27.1897 21.04V19.3C27.1897 19.12 27.0697 19 26.8897 19H21.1897C20.9497 19 20.8297 19.27 21.0097 19.45L23.2897 21.55V31.09L23.2297 31.03L20.7397 33.55C20.5597 33.73 20.6797 34 20.9197 34H29.5297C29.7697 34 29.8897 33.73 29.7097 33.55L27.2197 31.03L27.1897 31.06V26.02C27.1897 23.2 29.8897 20.2 30.7897 20.08C31.5397 19.99 33.0697 23.08 33.1597 23.71C33.1897 24.01 33.2797 28.12 33.3397 31.03L30.8497 33.55C30.6697 33.73 30.7897 34 31.0297 34H39.8197C40.0597 34 40.1797 33.73 39.9997 33.55L37.5397 31.06C37.5397 29.5 37.5397 27.58 37.5097 26.02C37.5097 23.2 40.2097 20.2 41.1097 20.08C41.8597 19.99 43.3897 23.08 43.4797 23.71C43.5097 24.01 43.5997 28.12 43.6597 31.03L41.1697 33.55C40.9897 33.73 41.1097 34 41.3497 34H50.1697C50.4097 34 50.5297 33.73 50.3497 33.55ZM67.9318 33.55L65.4718 31.06V23.65C65.4718 23.38 65.3518 23.14 65.1718 22.96C64.2418 22.03 60.9118 19.18 59.0518 18.97C56.8918 18.7 51.5818 21.79 50.9218 22.24C50.7418 22.36 50.8018 22.57 50.8318 22.63L52.3918 25.48C52.4518 25.6 52.5418 25.6 52.6618 25.54C53.9518 24.73 60.4918 20.74 61.2418 21.25C61.6318 21.55 61.6318 23.26 61.6318 24.13C60.5218 24.49 54.2818 26.8 52.0918 28.42C51.5818 28.78 51.2218 29.56 51.2518 29.98C51.3718 30.64 53.1718 33.85 53.5618 33.97C53.9218 34.09 56.2318 34.15 56.6818 33.88C57.0718 33.64 60.7018 29.71 61.5418 28.39L61.4518 33.67C61.4518 33.85 61.6018 34 61.7818 34H67.7518C67.9918 34 68.1118 33.73 67.9318 33.55ZM56.2318 31.69C55.7518 31.66 55.0018 29.92 55.3618 29.2C56.2018 27.55 59.8918 26.53 61.5718 25.69V25.72C60.7018 27.34 56.7418 31.75 56.2318 31.69ZM73.1574 16.33C73.2774 16.45 73.4874 16.45 73.6074 16.33L75.8574 14.08C75.9774 13.93 75.9774 13.75 75.8574 13.63L73.6074 11.38C73.4874 11.23 73.2774 11.23 73.1574 11.38L70.9074 13.63C70.7874 13.75 70.7874 13.93 70.9074 14.08L73.1574 16.33ZM77.9274 33.55L75.4974 31.09V19.18C75.4974 19.09 75.4074 19 75.3174 19H69.4374C69.1974 19 69.0774 19.27 69.2574 19.45L71.6274 21.85V31.06L69.1674 33.55C68.9874 33.73 69.1074 34 69.3474 34H77.7474C77.9874 34 78.1074 33.73 77.9274 33.55ZM87.474 33.55L85.044 31.09V13.48C85.044 13.39 84.954 13.3 84.864 13.3H79.014C78.774 13.3 78.654 13.57 78.834 13.75L81.174 16.12V31L78.654 33.55C78.474 33.73 78.594 34 78.834 34H87.294C87.534 34 87.654 33.73 87.474 33.55ZM92.6607 23.95L90.4107 21.7C90.2907 21.55 90.2907 21.37 90.4107 21.25L92.6607 19C92.7807 18.85 92.9907 18.85 93.1107 19L95.3607 21.25C95.4807 21.37 95.4807 21.55 95.3607 21.7L93.1107 23.95C92.9907 24.07 92.7807 24.07 92.6607 23.95ZM92.6607 33.01L90.4107 30.76C90.2907 30.61 90.2907 30.43 90.4107 30.31L92.6607 28.06C92.7807 27.91 92.9907 27.91 93.1107 28.06L95.3607 30.31C95.4807 30.43 95.4807 30.61 95.3607 30.76L93.1107 33.01C92.9907 33.13 92.7807 33.13 92.6607 33.01Z'
              fill='white'
            />
          </svg>

          <input
            type='email'
            placeholder=''
            name='email'
            value={inputInfo.email}
            autoComplete='off'
            onChange={(e) => onChangeHandler(e)}
          />
        </span>
        {/* <span
          className={`footer__form__error-message${
            errors.email ? "--active" : ""
          }`}
        >
          "I need your email"
        </span> */}
      </motion.label>
      <motion.label variants={inputVariants} className='footer__form__message'>
        <span className={"footer__form__message__inner"}>
          <svg
            viewBox='0 0 146 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='146' height='50' fill='black' fillOpacity='1' />
            <path
              d='M32.42 33.55L29.93 31.03C29.93 28.06 29.9 23.8 29.75 23.23C29.54 22.42 27.47 19.18 26.66 18.97C25.82 18.76 22.64 18.73 21.65 18.85C21.11 18.91 19.91 20.08 18.98 22.27C18.26 20.98 16.94 19.12 16.34 18.97C15.5 18.76 12.32 18.73 11.33 18.85C10.91 18.91 10.07 19.63 9.26 21.04V19.3C9.26 19.12 9.14 19 8.96 19H3.26C3.02 19 2.9 19.27 3.08 19.45L5.36 21.55V31.09L5.3 31.03L2.81 33.55C2.63 33.73 2.75 34 2.99 34H11.6C11.84 34 11.96 33.73 11.78 33.55L9.29 31.03L9.26 31.06V26.02C9.26 23.2 11.96 20.2 12.86 20.08C13.61 19.99 15.14 23.08 15.23 23.71C15.26 24.01 15.35 28.12 15.41 31.03L12.92 33.55C12.74 33.73 12.86 34 13.1 34H21.89C22.13 34 22.25 33.73 22.07 33.55L19.61 31.06C19.61 29.5 19.61 27.58 19.58 26.02C19.58 23.2 22.28 20.2 23.18 20.08C23.93 19.99 25.46 23.08 25.55 23.71C25.58 24.01 25.67 28.12 25.73 31.03L23.24 33.55C23.06 33.73 23.18 34 23.42 34H32.24C32.48 34 32.6 33.73 32.42 33.55ZM48.5131 27.88C47.6131 28.93 44.0131 32.59 43.6831 32.59C43.2931 32.59 37.5031 28.57 37.4131 28.45C37.2931 28.36 37.3531 27.82 37.3531 27.82C37.3531 27.82 49.6531 24.82 49.8031 24.46C49.9231 24.16 46.5031 19.39 45.9331 19.06C45.3031 18.67 39.3331 18.73 39.0331 18.94C38.7331 19.12 34.6531 22.18 34.3531 22.63C34.0531 23.08 33.1831 29.56 33.3331 30.07C33.4831 30.55 39.0031 33.91 39.3631 34.03C39.6931 34.15 44.4931 34.3 44.8231 34.12C45.1231 33.94 48.7831 30.19 49.9831 28.96C50.1031 28.84 50.0731 28.63 49.9231 28.51L48.8731 27.82C48.7531 27.76 48.6031 27.79 48.5131 27.88ZM37.9831 24.31C38.2531 23.83 42.5131 20.74 42.5131 20.74C42.8731 20.83 45.1831 24.01 45.1831 24.01L37.5031 26.14C37.5031 26.14 37.7431 24.82 37.9831 24.31ZM65.0328 22.18L62.6328 24.01C62.5728 24.04 62.4828 24.07 62.3928 24.01C61.6428 23.41 57.0228 19.72 56.4528 19.99C55.9728 20.23 55.2828 23.38 55.5228 23.62C56.0028 24.07 64.1628 26.59 64.5228 27.19C64.9728 27.91 64.2828 31.66 64.0128 32.2C63.7428 32.77 58.3128 34.51 57.4128 34.27C55.4928 33.79 51.5928 31.39 50.7228 30.85C50.6328 30.79 50.6028 30.67 50.6628 30.58L52.4328 28.27C52.4928 28.18 52.5828 28.18 52.6428 28.24C53.6928 28.81 60.3228 32.59 60.6528 32.5C60.9828 32.38 61.1028 29.26 60.9528 28.99C60.8028 28.75 52.0728 25.81 51.8028 25.45C51.5328 25.09 52.1928 20.2 52.4628 19.78C52.7328 19.39 59.4228 18.46 60.2328 18.67C60.9228 18.85 64.1628 21.22 65.0328 21.88C65.1528 21.97 65.1528 22.09 65.0328 22.18ZM79.6227 22.18L77.2227 24.01C77.1627 24.04 77.0727 24.07 76.9827 24.01C76.2327 23.41 71.6127 19.72 71.0427 19.99C70.5627 20.23 69.8727 23.38 70.1127 23.62C70.5927 24.07 78.7527 26.59 79.1127 27.19C79.5627 27.91 78.8727 31.66 78.6027 32.2C78.3327 32.77 72.9027 34.51 72.0027 34.27C70.0827 33.79 66.1827 31.39 65.3127 30.85C65.2227 30.79 65.1927 30.67 65.2527 30.58L67.0227 28.27C67.0827 28.18 67.1727 28.18 67.2327 28.24C68.2827 28.81 74.9127 32.59 75.2427 32.5C75.5727 32.38 75.6927 29.26 75.5427 28.99C75.3927 28.75 66.6627 25.81 66.3927 25.45C66.1227 25.09 66.7827 20.2 67.0527 19.78C67.3227 19.39 74.0127 18.46 74.8227 18.67C75.5127 18.85 78.7527 21.22 79.6227 21.88C79.7427 21.97 79.7427 22.09 79.6227 22.18ZM98.1955 33.55L95.7355 31.06V23.65C95.7355 23.38 95.6155 23.14 95.4355 22.96C94.5055 22.03 91.1755 19.18 89.3155 18.97C87.1555 18.7 81.8455 21.79 81.1855 22.24C81.0055 22.36 81.0655 22.57 81.0955 22.63L82.6555 25.48C82.7155 25.6 82.8055 25.6 82.9255 25.54C84.2155 24.73 90.7555 20.74 91.5055 21.25C91.8955 21.55 91.8955 23.26 91.8955 24.13C90.7855 24.49 84.5455 26.8 82.3555 28.42C81.8455 28.78 81.4855 29.56 81.5155 29.98C81.6355 30.64 83.4355 33.85 83.8255 33.97C84.1855 34.09 86.4955 34.15 86.9455 33.88C87.3355 33.64 90.9655 29.71 91.8055 28.39L91.7155 33.67C91.7155 33.85 91.8655 34 92.0455 34H98.0155C98.2555 34 98.3755 33.73 98.1955 33.55ZM86.4955 31.69C86.0155 31.66 85.2655 29.92 85.6255 29.2C86.4655 27.55 90.1555 26.53 91.8355 25.69V25.72C90.9655 27.34 87.0055 31.75 86.4955 31.69ZM113.891 30.82C112.781 30.19 102.641 31.03 103.361 29.92C103.511 29.68 108.941 29.08 110.801 28.87C111.131 28.87 111.371 28.84 111.401 28.81C111.611 28.69 114.221 26.74 114.371 26.47C114.491 26.2 114.581 21.79 114.371 21.58C114.191 21.4 112.481 19.99 111.611 19.36L114.851 18.85C115.061 18.82 115.151 18.58 115.001 18.43L112.871 16.36C112.781 16.27 112.661 16.3 112.601 16.39L110.741 19C109.331 18.94 104.831 19 104.471 19.15C103.961 19.33 100.901 21.37 100.721 21.7C100.571 22.03 100.661 25.93 100.871 26.32C101.051 26.71 103.721 28.72 104.111 28.84C104.141 28.84 104.261 28.87 104.411 28.87C102.431 28.99 100.061 29.2 99.8211 29.41C99.4011 29.74 101.921 32.95 102.461 33.19C102.671 33.28 110.621 33.88 111.071 34.06C111.791 34.36 113.171 37.24 112.871 37.45C112.481 37.72 106.061 37.72 105.851 37.57C105.611 37.39 102.911 33.73 102.461 33.73C102.191 33.73 101.291 36.94 101.351 37.36C101.411 37.75 105.371 40.63 105.671 40.51C105.941 40.39 116.051 37.72 116.171 37.24C116.261 36.79 114.371 31.09 113.891 30.82ZM103.931 26.14C103.781 25.99 103.751 22.36 104.021 22.06C104.351 21.7 111.191 21.85 111.311 22C111.521 22.21 111.521 25.9 111.371 26.08C111.221 26.23 104.081 26.29 103.931 26.14ZM131.98 27.88C131.08 28.93 127.48 32.59 127.15 32.59C126.76 32.59 120.97 28.57 120.88 28.45C120.76 28.36 120.82 27.82 120.82 27.82C120.82 27.82 133.12 24.82 133.27 24.46C133.39 24.16 129.97 19.39 129.4 19.06C128.77 18.67 122.8 18.73 122.5 18.94C122.2 19.12 118.12 22.18 117.82 22.63C117.52 23.08 116.65 29.56 116.8 30.07C116.95 30.55 122.47 33.91 122.83 34.03C123.16 34.15 127.96 34.3 128.29 34.12C128.59 33.94 132.25 30.19 133.45 28.96C133.57 28.84 133.54 28.63 133.39 28.51L132.34 27.82C132.22 27.76 132.07 27.79 131.98 27.88ZM121.45 24.31C121.72 23.83 125.98 20.74 125.98 20.74C126.34 20.83 128.65 24.01 128.65 24.01L120.97 26.14C120.97 26.14 121.21 24.82 121.45 24.31ZM138.54 23.95L136.29 21.7C136.17 21.55 136.17 21.37 136.29 21.25L138.54 19C138.66 18.85 138.87 18.85 138.99 19L141.24 21.25C141.36 21.37 141.36 21.55 141.24 21.7L138.99 23.95C138.87 24.07 138.66 24.07 138.54 23.95ZM138.54 33.01L136.29 30.76C136.17 30.61 136.17 30.43 136.29 30.31L138.54 28.06C138.66 27.91 138.87 27.91 138.99 28.06L141.24 30.31C141.36 30.43 141.36 30.61 141.24 30.76L138.99 33.01C138.87 33.13 138.66 33.13 138.54 33.01Z'
              fill='white'
            />
          </svg>

          <textarea
            id='textArea'
            name='message'
            value={inputInfo.message}
            rows='3'
            cols='30'
            autoComplete='off'
            onChange={(e) => onChangeHandler(e)}
          />
        </span>
        {/* <span
          className={`footer__form__error-message${
            errors.message ? "--active" : ""
          }`}
        >
          "I need your message"
        </span> */}
      </motion.label>

      {sendButton}
    </motion.form>
  );
}

export default Form;
