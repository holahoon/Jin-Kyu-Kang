import React from 'react';

import Logo from './Logo/Logo';
import Navigation from './navigation/Navigation';

function Navigations() {
  const navTitles = ['works', 'about', 'resume'];

  return (
    <nav className='nav'>
      <Logo className='nav__logo' />
      <ul className='nav__menu'>
        {navTitles.map((title) => (
          <Navigation key={title} navTitle={title} />
        ))}
      </ul>
    </nav>
  );
}

export default Navigations;
