import React, { useState, useEffect } from 'react';

function Footer() {
  // const [height, setHeight] = useState(0);

  // useEffect(() => {
  //   // console.log(window.innerHeight);
  //   setHeight(window.innerHeight);
  // }, []);

  // const footerTopPosition = {
  //   // top: height,
  //   marginTop: height,
  // };
  return (
    <footer className='footer'>
      <section>
        <div className='footer__contact'>Contact</div>
        <div className='footer__language'>
          <span className='footer__language-eng'>eng</span>
          <span className='footer__language-kr'>kr</span>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
