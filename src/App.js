import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Layout from "./layouts/Layout";
import Navigation from "./containers/Navigation";
import Home from "./containers/Home";
// import Works from "./containers/Works";
// import About from "./containers/About";
import SideText from "./components/UI/SideText/SideText";

import "./styles/main.scss";
import Footer from "./containers/Footer";

function App() {
  return (
    <>
      <Layout>
        <Router>
          <Navigation />
          <SideText />

          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            {/* <Route path='/works'>
              <Works />
            </Route>
            <Route path='/about'>
              <About />
            </Route> */}
            <Redirect to='/' />
          </Switch>

          <Footer />
        </Router>
      </Layout>
    </>
  );
}

export default App;
