import React, { memo } from "react";
import { NavLink } from "react-router-dom";

function NavigationItem({ navTitle, closeMobileNavHandler, reactGAHandler }) {
  return (
    <li
      className={`nav__menu__item nav__menu__item-${navTitle}`}
      onClick={closeMobileNavHandler}
    >
      <NavLink
        to={`/${navTitle}`}
        activeClassName='nav-active'
        onClick={reactGAHandler(navTitle)}
      >
        {navTitle}
      </NavLink>
    </li>
  );
}

export default memo(NavigationItem);
