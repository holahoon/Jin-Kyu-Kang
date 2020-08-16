import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "./layouts/Layout";
import Navigation from "./containers/Navigation";
import Home from "./containers/Home";
import Works from "./containers/Works";
import About from "./containers/About";
import SideText from "./components/UI/SideText/SideText";
import Footer from "./containers/Footer";
import * as projectPages from "./components/worksPage/projectPages";

import image_ikea from "./assets/images/home-ikea.png";
import image_bestrong from "./assets/images/home-bestrong.png";
import image_icantbreathe from "./assets/images/home-icantbreathe.png";
import image_storyceller from "./assets/images/home-storyceller.png";
import image_fivie from "./assets/images/home-fivie.png";
import image_dk from "./assets/images/home-dk.png";
import image_frame from "./assets/images/home-frame.png";
import image_ball from "./assets/images/home-ball.png";
import image_greyed from "./assets/images/home-greyed.png";

import "./styles/main.scss";

const projectList = [
  {
    urlName: "ikea",
    projectName: "IKEA",
    image: image_ikea,
    title: "UI/UX",
  },
  {
    urlName: "bestrong",
    projectName: "be strong",
    image: image_bestrong,
    title: "UI/UX",
  },
  {
    urlName: "icantbreathe",
    projectName: "icantbreathe",
    image: image_icantbreathe,
    title: "UI/UX",
  },
  {
    urlName: "storyceller",
    projectName: "Storyceller",
    image: image_storyceller,
    title: "UI/UX",
  },
  {
    urlName: "fivie",
    projectName: "FIVIE",
    image: image_fivie,
    title: "UI/UX",
  },
  {
    urlName: "dk",
    projectName: "dk",
    image: image_dk,
    title: "UI/UX",
  },
  {
    urlName: "frame",
    projectName: "FRAME",
    image: image_frame,
    title: "UI/UX",
  },
  {
    urlName: "ball",
    projectName: "ball.",
    image: image_ball,
    title: "UI/UX",
  },
  {
    urlName: "greyed",
    projectName: "greyed",
    image: image_greyed,
    title: "UI/UX",
  },
];

function App() {
  return (
    <>
      <Layout>
        <Router>
          <Navigation />
          <SideText />

          <AnimatePresence>
            <Switch>
              <Route path='/' exact>
                <Home projectList={projectList} />
              </Route>

              <Route path='/works/ikea' component={projectPages.IkeaProject} />
              <Route
                path='/works/bestrong'
                component={projectPages.BestrongProject}
              />
              <Route
                path='/works/icantbreathe'
                component={projectPages.IcantbreatheProject}
              />
              <Route
                path='/works/storyceller'
                component={projectPages.StorycellerProject}
              />
              <Route
                path='/works/fivie'
                component={projectPages.FivieProject}
              />
              <Route path='/works/dk' component={projectPages.DkProject} />
              <Route
                path='/works/frame'
                component={projectPages.FrameProject}
              />
              <Route path='/works/ball' component={projectPages.BallProject} />
              <Route
                path='/works/greyed'
                component={projectPages.GreyedProject}
              />

              <Route path='/works'>
                <Works projectList={projectList} />
              </Route>
              <Route path='/about' component={About} />

              <Redirect to='/' />
            </Switch>
          </AnimatePresence>

          <Footer />
        </Router>
      </Layout>
    </>
  );
}

export default App;
