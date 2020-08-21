import React, { useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ReactGA from "react-ga";

import Layout from "./layouts/Layout";
import Navigation from "./containers/Navigation";
import Home from "./containers/Home";
import Works from "./containers/Works";
import About from "./containers/About";
import SideText from "./components/UI/SideText/SideText";
import Footer from "./containers/Footer";
import * as projectPages from "./components/worksPage/projectPages";

import image_blob from "./assets/images/home-blob.png";
import image_ikea from "./assets/images/home-ikea.png";
import image_bestrong from "./assets/images/home-bestrong.png";
import image_icantbreathe from "./assets/images/home-icantbreathe.png";
import image_fivie from "./assets/images/home-fivie.png";
import image_greyed from "./assets/images/home-greyed.png";

import "./styles/main.scss";

const projectList = [
  {
    urlName: "fivie",
    projectName: "Fivie",
    image: image_fivie,
    category: "UI/UX",
  },
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
    urlName: "blob",
    projectName: "blob",
    image: image_blob,
    category: "Web Design",
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

  useEffect(() => {
    initGA();
  }, []);

  function initGA() {
    const trackingId = "UA-146149191-2";
    ReactGA.initialize(trackingId);
  }

  return (
    <>
      <Layout>
        <Navigation />
        <SideText />

        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route path='/works/ikea' component={projectPages.IkeaProject} />
            <Route
              path='/works/bestrong'
              component={projectPages.BestrongProject}
            />
            <Route
              path='/works/icantbreathe'
              component={projectPages.IcantbreatheProject}
            />
            <Route path='/works/fivie' component={projectPages.FivieProject} />
            <Route path='/works/blob' component={projectPages.BlobProject} />
            <Route
              path='/works/greyed'
              component={projectPages.GreyedProject}
            />

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
