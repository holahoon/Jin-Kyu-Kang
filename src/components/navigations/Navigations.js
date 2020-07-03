import React from 'react';

import Navigation from './navigation/Navigation';

function Navigations() {
  const navTitles = ['works', 'about', 'resume'];

  return (
    <nav className='navigation'>
      <div>LOGO</div>
      <ul>
        {navTitles.map((title) => (
          <Navigation key={title} navTitle={title} />
        ))}
      </ul>
    </nav>
  );
}

export default Navigations;
