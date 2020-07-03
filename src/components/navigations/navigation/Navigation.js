import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation({ navTitle }) {
  return (
    <li className='navigation__navItem'>
      <NavLink to={`/${navTitle}`}>{navTitle}</NavLink>
    </li>
  );
}

export default Navigation;
