import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import Header from './containers/Header';
import Home from './containers/Home';
import Works from './containers/Works';
import About from './containers/About';
import Resume from './containers/Resume';
import SideText from './layouts/SideText/SideText';

import './styles/main.scss';

function App() {
  return (
    <>
      <Layout>
        <Router>
          <Header />
          <SideText />

          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/works'>
              <Works />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/resume'>
              <Resume />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </>
  );
}

export default App;
