import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import Logo from "../components/navigations/Logo/Logo";
import NavigationItem from "../components/navigations/navigationItem/NavigationItem";

const navTitles = ["works", "about", "contact"];

function Navigations(props) {
  const [decreaseLogoSize, setdecreaseLogoSize] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    props.location.pathname !== "/"
      ? setdecreaseLogoSize(true)
      : setdecreaseLogoSize(false);
  }, [props.location.pathname]);

  const openMobileNavHandler = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <nav className='nav'>
      <Logo decreaseLogoSize={decreaseLogoSize} />

      <div
        className={`nav__menu__mobile${
          mobileNavOpen ? " mobile-nav--open" : ""
        }`}
        onClick={openMobileNavHandler}
      ></div>
      <ul className='nav__menu'>
        {navTitles.map((title) => (
          <NavigationItem key={title} navTitle={title} />
        ))}
      </ul>
    </nav>
  );
}

export default withRouter(Navigations);
