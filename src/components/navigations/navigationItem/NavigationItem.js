import React from "react";
import { NavLink } from "react-router-dom";

function NavigationItem({ navTitle }) {
  return (
    <li className={`nav__menu__item nav__menu__item-${navTitle}`}>
      <NavLink to={`/`} activeClassName='nav-active'>
        {navTitle}
      </NavLink>
    </li>
  );
}

export default NavigationItem;
