import React from 'react';
import { NavLink } from 'react-router-dom';

function Logo({ className }) {
  return (
    <div className={className}>
      <NavLink to='/'>Logo</NavLink>
    </div>
  );
}

export default Logo;
