import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
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
import { ProjectContext } from "./hooks/ProjectContext";

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
    projectDescription:
      "“We believe in the simple, not the complex.” It’s a quote from Apple’s design philosophy. Apple’s company vision to create products that customers need with innovative designs was a great inspiration to me. Before their steaming service ‘Apple TV+’ was launched, I imagined what kind of site they would offer if they entered the streaming market. And I attempted to create a simple movie streaming site following Apple’s design philosophy and using Apple’s design resources to make it familiar and blend into their design system. I studied currently available media sites to learn their problems and missing elements, and then I started the project from the wireframing with a developer friend to make it feasible. Most of the movie search engines have a complicated structure due to the extensive database. And the users can become indecisive about what to watch. So I arranged the users to type in keywords about their preferences such as genre and actor or director’s name, already cataloged as tags, and it would show them just the top five search results facilitating the choice. I named it ‘Fivie’, combining the words ‘five’ and ‘movie’. If a user wishes to have more options, could select more additional tags. I completed this conceptual site with an algorithm that can collect data about users’ interests and preferences.",
    image: image_fivie,
    category: "UI/UX",
  },
  {
    urlName: "ikea",
    projectName: "IKEA",
    projectDescription:
      "I’ve been moving a lot from New York to D.C., to Philadelphia, then to Austin, and I became a frequent customer of IKEA. Every time I purchased furniture and housewares, the high functionality and relatively accessible prices of IKEA satisfied my needs. I visited many of their stores and bought and used so many products that I got to know the pros and cons of IKEA. Particularly using their app, I found out various aspects to be improved. So I redesigned it analyzing how IKEA can offer upgraded services based on my own experiences.",
    image: image_ikea,
    category: "UI/UX",
  },
  {
    urlName: "bestrong",
    projectName: "be strong",
    projectDescription:
      "It’s impossible not to think about racial discrimination being an immigrant myself. Since it’s a deep-rooted issue in this society, I thought time would fade it out, but the tension between ethnic groups escalated day by day. Once more people came out to the streets and raised their voices. The protests remained peaceful but sometimes they were repressed by the police force excessively. Some outraged protesters responded with violence and taking advantage of this chaos, the looters broke into the stores, steal, and destroyed other innocent citizens’ properties. This whole situation raised questions for me. Why do we criticize each other so harshly? Why do we want to get stronger? Does being strong mean to speak up your opinions? Many thoughts crossed my mind. After pondering for a while, I concluded that being strong is not to show off one’s strength or to use it to repress someone, but to be able to maintain one’s stance under any circumstances and to have the inner strength to overcome the obstacles. We all need to look back on ourselves and grow stronger inside first. Be strong.",
    image: image_bestrong,
    category: "Visual Design",
  },
  {
    urlName: "icantbreathe",
    projectName: "icantbreathe",
    projectDescription:
      "When the racial conflict was at the boiling point, SpaceX flew out into space. Witnessing that event, I was amazed by the human technological progress, and the word ‘breathtaking’ popped up in my head. Meanwhile, on Earth, a person who committed a crime but not resisted the arrest lost his life due to police brutality. His last words were ‘I can’t breathe’ and he deceased at the scene, out of breath.  Within a few days, the opposite things happened in the sky and earth, and I was torn between the wonder of the human technological achievements and the sympathy for a man’s perished life trampled against the ground. Lost somewhere in between, trying to comfort my perplexed mind and smothered heart, I created this poster.",
    image: image_icantbreathe,
    category: "Visual Design",
  },
  {
    urlName: "blob",
    projectName: "blob",
    projectDescription: "",
    image: image_blob,
    category: "Web Design",
  },
  {
    urlName: "greyed",
    projectName: "greyed",
    projectDescription:
      "One day I came to wonder what would be like to live as a color-blind person. There are people born with color blindness and others who acquire it later in life. I imagined it would be challenging for those unable to see or distinguish colors to figure out what’s their favorite color, what color suits them best, and how to express themselves through colors. Colors are formed by reflections of the light but if there is no light, we can only see black and white, in monochromatic grayscale. And I thought the grayscale palette would be helpful to those who are stressed about what colors to wear or combine. That’s why I thought of the idea of a multi-brand store that offers white, black, and grey, all monochromatic products. It could be arguable why such a site is even necessary when the color-blind people are free to choose whatever color they want. But I considered some of them could be insecure about their choices since they can’t distinguish and worry about what other people might think, and decided to go forward with it. It wasn’t a real project to develop, just a conceptual one, so I wanted to try something new. The design was started from this initial idea. At that time, I was merely taking an interest in design. I hadn’t any skills and everything was new and unknown. The only tool I could use was Photoshop and even that at the beginner’s level. Focused on the one clear concept, I pursued designs that looked pretty to me so there was a lot to improve and the process was quite long. But as the first project, it turned out to be satisfactory. If I had the chance in the future, I would like to design a product website that’s more beneficial to color-blind customers and also visually more attractive.",
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
    ReactGA.initialize("UA-146149191-2");
    // pageview
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  return (
    <>
      <Layout>
        <Navigation />
        <SideText />

        <ProjectContext.Provider value={projectList}>
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
              <Route
                path='/works/fivie'
                component={projectPages.FivieProject}
              />
              <Route path='/works/blob' component={projectPages.BlobProject} />
              <Route
                path='/works/greyed'
                component={projectPages.GreyedProject}
              />

              <Route path='/works'>
                <Works />
              </Route>
              <Route path='/about' component={About} />

              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </AnimatePresence>
        </ProjectContext.Provider>

        <Footer />
      </Layout>
    </>
  );
}

export default App;
