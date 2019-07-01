import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './composants/header_footer/Header';
import Featured from './composants/featured/';
import SlapInfo from './composants/slapinfo/';
import Highlights from './composants/highlights/';
import Pricing from './composants/pricing/';
import Location from './composants/location/';
import Footer from './composants/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App"
      style={{
        backgroundColor:  "white",
        height: 1500,
      }}>
        <Header />
        <Element name="Countdown">
          <Featured/>
        </Element>
        <Element name="Info">
          <SlapInfo />
        </Element>
        <Element name="Rules">
          <Highlights />
        </Element>
        <Element name="Characters">
          <Pricing />
        </Element>
        <Element name="Location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
