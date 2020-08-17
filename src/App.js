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
    category: "UI/UX",
  },
  {
    urlName: "bestrong",
    projectName: "be strong",
    image: image_bestrong,
    category: "Visual Design",
  },
  {
    urlName: "icantbreathe",
    projectName: "icantbreathe",
    image: image_icantbreathe,
    category: "Visual Design",
  },
  {
    urlName: "storyceller",
    projectName: "Storyceller",
    image: image_storyceller,
    category: "UI/UX",
  },
  {
    urlName: "fivie",
    projectName: "FIVIE",
    image: image_fivie,
    category: "UI/UX",
  },
  {
    urlName: "dk",
    projectName: "dk",
    image: image_dk,
    category: "Web Design",
  },
  {
    urlName: "frame",
    projectName: "FRAME",
    image: image_frame,
    category: "Poster Design",
  },
  {
    urlName: "ball",
    projectName: "ball.",
    image: image_ball,
    category: "Concept Design",
  },
  {
    urlName: "greyed",
    projectName: "greyed",
    image: image_greyed,
    category: "Branding",
  },
];

function App() {
  const location = useLocation();

  return (
    <>
      <Layout>
        <Navigation />
        <SideText />

        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            {/* <Route path='/works/ikea' component={projectPages.IkeaProject} />
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
            <Route path='/works/fivie' component={projectPages.FivieProject} /> */}
            <Route path='/works/dk' component={projectPages.DkProject} />
            {/* <Route path='/works/frame' component={projectPages.FrameProject} />
            <Route path='/works/ball' component={projectPages.BallProject} />
            <Route
              path='/works/greyed'
              component={projectPages.GreyedProject}
            /> */}

            <Route path='/works'>
              <Works projectList={projectList} />
            </Route>
            <Route path='/about' component={About} />

            <Route path='/'>
              <Home projectList={projectList} />
            </Route>

            <Redirect to='/' />
          </Switch>
        </AnimatePresence>

        <Footer />
      </Layout>
    </>
  );
}

export default App;
