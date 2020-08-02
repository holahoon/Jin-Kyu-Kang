import React from "react";
import { NavLink } from "react-router-dom";

import jinKyuLogo from "../../../assets/images/jinkyu.svg";

function Logo({ className }) {
  return (
    <div className={className}>
      <NavLink to='/'>
        <img src={jinKyuLogo} alt='Jin Kyu' draggable='false' />
      </NavLink>
    </div>
  );
}

export default Logo;
