import React from "react";

function CopyrightSection() {
  return (
    <div className='about__copyright-section'>
      <svg
        width='60'
        height='60'
        viewBox='0 0 60 60'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='30' cy='30' r='30' fill='#DDDDDD' />
        <path
          d='M37.1399 47.24C38.0399 47.06 48.5699 34.82 50.9999 32.21C51.1799 31.94 51.4499 31.94 51.6299 32.12L55.3199 34.73C55.6799 35 55.6799 35.27 55.4099 35.54C52.6199 38.69 40.7399 52.19 39.3899 52.37C38.0399 52.55 28.4999 52.73 26.6999 52.37C24.9899 52.01 8.51994 42.2 8.06994 40.13C7.79994 38.51 7.52994 27.08 8.15994 25.55C8.96994 23.66 20.6699 9.71001 22.4699 8.99001C23.8199 8.45001 36.6899 8.18001 38.3999 8.81001C40.9199 9.71001 50.2799 18.44 52.5299 20.69C52.7099 20.87 52.7099 21.23 52.5299 21.41L46.3199 26.99C46.0499 27.17 45.7799 27.26 45.5999 27.08C42.5399 24.65 31.5599 14.48 30.1199 14.66C28.7699 14.75 21.4799 26.36 20.9399 27.53C20.3999 28.79 19.9499 34.28 20.3999 35.45C21.2999 37.88 35.6099 47.51 37.1399 47.24Z'
          fill='#1D1D1D'
        />
      </svg>
      <div className='about__copyright-section__text'>
        <p className='jinkyu'>
          <span>2020.</span>
          <span>COPYRIGHT</span>
          <span>JINKYU KANG</span>
        </p>
        <span className='line'></span>
        <p className='holahoon'>
          Developed by{" "}
          <a
            href='https://holahoon.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            hola.hoon
          </a>
        </p>
      </div>
    </div>
  );
}

export default CopyrightSection;
