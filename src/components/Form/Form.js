import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as emailjs from 'emailjs-com';

import arrow1 from '../../assets/images/send-arrow-1.svg';
import arrow2 from '../../assets/images/send-arrow-2.svg';

const formVariants = {
  open: {
    display: 'block',
  },
  closed: {
    display: 'none',
    transition: {
      delay: 0.2,
    },
  },
};
const inputVariants = {
  open: {
    visibility: 'visible',
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
  closed: {
    visibility: 'hidden',
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
};
const submitHover1 = {
  hover: {
    transform: 'translateX(7px)',
    transition: {
      duration: 0.1,
    },
  },
};
const submitHover2 = {
  hover: {
    transform: 'translateX(7px)',
    transition: {
      delay: 0.1,
    },
  },
};

function Form() {
  const [inputInfo, setInputInfo] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setInputInfo({
      ...inputInfo,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    checkValidity();
    const userId = 'user_GtWvsDXi01LAB0ZVgkhkM';
    emailjs.sendForm('gmail', 'template_1', e.target, userId).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        if (response.status === 200) {
          setInputInfo({
            name: '',
            email: '',
            message: '',
          });
        }
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
  };

  const checkValidity = (type) => {};

  return (
    <motion.form
      variants={formVariants}
      className='footer__form'
      onSubmit={submitHandler}>
      <motion.label variants={inputVariants} className='footer__form__name'>
        Name:
        <input
          type='text'
          placeholder=''
          name='name'
          value={inputInfo.name}
          autoComplete='off'
          onChange={(e) => onChangeHandler(e)}
        />
      </motion.label>
      <motion.label variants={inputVariants} className='footer__form__email'>
        Email:
        <input
          type='email'
          placeholder=''
          name='email'
          value={inputInfo.email}
          autoComplete='off'
          onChange={(e) => onChangeHandler(e)}
        />
      </motion.label>
      <motion.label variants={inputVariants} className='footer__form__message'>
        Message: ​
        <textarea
          id='textArea'
          name='message'
          value={inputInfo.message}
          rows='3'
          cols='30'
          autoComplete='off'
          onChange={(e) => onChangeHandler(e)}
        />
      </motion.label>

      <div className='footer__form__send'>
        <motion.button
          whileHover='hover'
          variants={inputVariants}
          type='submit'>
          Send
          <motion.img variants={submitHover1} src={arrow1} alt='send arrow 1' />
          <motion.img variants={submitHover2} src={arrow2} alt='send arrow 2' />
        </motion.button>
      </div>
    </motion.form>
  );
}

export default Form;
