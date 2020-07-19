import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import Header from './containers/Header';
import Home from './containers/Home';
// import Works from './containers/Works';
// import About from './containers/About';
// import Resume from './containers/Resume';
import SideText from './components/UI/SideText/SideText';

import './styles/main.scss';
import Footer from './containers/Footer';

function App() {
  return (
    <>
      <Layout>
        <Router>
          <Header />
          <SideText />

          <Switch>
            <Route path='/' exact>
              {/* <ComingSoon /> */}
              <Home />
            </Route>
            {/* <Route path='/works'>
              <Works />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/resume'>
              <Resume />
            </Route> */}
          </Switch>

          <Footer />
        </Router>
      </Layout>
    </>
  );
}

export default App;
