import React from "react";

import Logo from "../components/navigations/Logo/Logo";
import NavigationItem from "../components/navigations/navigationItem/NavigationItem";

function Navigations() {
  const navTitles = ["works", "about", "resume"];

  return (
    <nav className='nav'>
      <Logo className='nav__logo' />
      <ul className='nav__menu'>
        {navTitles.map((title) => (
          <NavigationItem key={title} navTitle={title} />
        ))}
      </ul>
    </nav>
  );
}

export default Navigations;
