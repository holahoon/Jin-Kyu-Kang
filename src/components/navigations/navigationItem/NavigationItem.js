import React from "react";
import { NavLink } from "react-router-dom";

function NavigationItem({ navTitle, openMobileNavHandler }) {
  return (
    <li
      className={`nav__menu__item nav__menu__item-${navTitle}`}
      onClick={openMobileNavHandler}
    >
      <NavLink to={`/${navTitle}`} activeClassName='nav-active'>
        {navTitle}
      </NavLink>
    </li>
  );
}

export default NavigationItem;
