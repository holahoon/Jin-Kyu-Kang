import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";

import Logo from "../components/navigations/Logo/Logo";
import NavigationItem from "../components/navigations/navigationItem/NavigationItem";

const navTitles = ["works", "about", "contact"];

function Navigations(props) {
  const [decreaseLogoSize, setdecreaseLogoSize] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  // const [mobilenavUlPosition, setMobileNavUlPosition] = useState(80);
  const navMenuRef = useRef(0);

  useEffect(() => {
    props.location.pathname !== "/"
      ? setdecreaseLogoSize(true)
      : setdecreaseLogoSize(false);
  }, [props.location.pathname]);

  // useEffect(() => {
  //   // window.innerWidth < 768 &&
  //   setMobileNavUlPosition(navMenuRef.current.offsetWidth + 5);
  // }, []);

  const openMobileNavHandler = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <nav className='nav'>
      <Logo decreaseLogoSize={decreaseLogoSize} />

      <div
        className={`nav__menu__mobile${
          mobileNavOpen ? " mobile-button--open" : ""
        }`}
        onClick={openMobileNavHandler}
      ></div>
      <ul
        ref={navMenuRef}
        // style={{
        //   transform: `translateX(${
        //     !mobileNavOpen ? mobilenavUlPosition : 0
        //   }px)`,
        // }}
        // className='nav__menu'
        className={`nav__menu${mobileNavOpen ? " mobile-nav--open" : ""}`}
      >
        {navTitles.map((title) => (
          <NavigationItem key={title} navTitle={title} />
        ))}
      </ul>
    </nav>
  );
}

export default withRouter(Navigations);
