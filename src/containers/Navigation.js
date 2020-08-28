import React, { useState, useEffect, useRef, useCallback } from "react";
import { withRouter } from "react-router-dom";
import ReactGA from "react-ga";

import Logo from "../components/navigations/Logo/Logo";
import NavigationItem from "../components/navigations/navigationItem/NavigationItem";
import Backdrop from "../components/UI/Backdrop/Backdrop";

const navTitles = ["works", "about"];

function Navigations(props) {
  const [decreaseLogoSize, setdecreaseLogoSize] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navMenuRef = useRef(0);

  useEffect(() => {
    props.location.pathname !== "/"
      ? setdecreaseLogoSize(true)
      : setdecreaseLogoSize(false);
  }, [props.location.pathname]);

  const openMobileNavHandler = useCallback(() => {
    setMobileNavOpen(true);
  }, []);
  const closeMobileNavHandler = useCallback(() => {
    setMobileNavOpen(false);
  }, []);

  const reactGAHandler = (navTitle) => {
    ReactGA.event({
      category: "Nav button",
      action: `Clicked on ${navTitle} page`,
    });
  };

  return (
    <nav className='nav'>
      <Logo decreaseLogoSize={decreaseLogoSize} />

      <div
        className={`nav__menu__mobile${
          mobileNavOpen ? " mobile-button--open" : ""
        }`}
        onClick={mobileNavOpen ? closeMobileNavHandler : openMobileNavHandler}
      ></div>
      <ul
        ref={navMenuRef}
        className={`nav__menu${mobileNavOpen ? " mobile-nav--open" : ""}`}
      >
        {navTitles.map((title) => (
          <NavigationItem
            key={title}
            navTitle={title}
            closeMobileNavHandler={closeMobileNavHandler}
            reactGAHandler={reactGAHandler}
          />
        ))}
        <span
          className='nav__menu__item nav__menu__item-contact'
          onClick={closeMobileNavHandler}
        >
          <a href='mailto:erugo.gada@gmail.com'>contact</a>
        </span>
      </ul>
      <Backdrop
        isOpen={mobileNavOpen}
        toggleContactMenu={closeMobileNavHandler}
      />
    </nav>
  );
}

export default withRouter(Navigations);
