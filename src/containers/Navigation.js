import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import Logo from "../components/navigations/Logo/Logo";
import NavigationItem from "../components/navigations/navigationItem/NavigationItem";

const navTitles = ["works", "about"];

function Navigations(props) {
  const [decreaseLogoSize, setdecreaseLogoSize] = useState(false);

  useEffect(() => {
    props.location.pathname !== "/"
      ? setdecreaseLogoSize(true)
      : setdecreaseLogoSize(false);
  }, [props.location.pathname]);

  return (
    <nav className='nav'>
      <Logo className='nav__logo' decreaseLogoSize={decreaseLogoSize} />

      <ul className='nav__menu'>
        {navTitles.map((title) => (
          <NavigationItem key={title} navTitle={title} />
        ))}
      </ul>
    </nav>
  );
}

export default withRouter(Navigations);
