import React from 'react';

import arrow1 from '../../assets/images/send-arrow-1.svg';
import arrow2 from '../../assets/images/send-arrow-2.svg';

function Form() {
  return (
    <form className='footer__form'>
      <label className='footer__form__name'>
        Name:
        <input type='text' placeholder='' name='name' autoComplete='off' />
      </label>
      <label className='footer__form__email'>
        Email:
        <input type='email' placeholder='' name='email' autoComplete='off' />
      </label>
      <label className='footer__form__message'>
        Message: ​
        <textarea id='txtArea' rows='3' cols='30' autoComplete='off' />
      </label>
      <div className='footer__form__send'>
        <button>
          Send
          <img src={arrow1} alt='send arrow 1' />
          <img src={arrow2} alt='send arrow 2' />
        </button>
      </div>
    </form>
  );
}

export default Form;
