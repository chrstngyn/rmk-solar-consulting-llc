import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import Section from "./components/Section"
import dummyText from "./dummyText"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Section
            title="RMK Solar Consulting LLC"
            dark={true}
            id="section1"
        />
        <Section
            title="Solar Terms"
            subtitle={ dummyText }
            dark={true}
            id="section2"
        />
        <Section
            title="Consulting Areas"
            subtitle={ dummyText }
            dark={true}
            id="section3"
        />
          <Section
              title="Provided Services"
              subtitle={ dummyText }
              dark={true}
              id="section4"
          />
          <Section
              title="Helpful Links"
              subtitle={ dummyText }
              dark={true}
              id="section5"
          />
          <Section
              title="About Us"
              subtitle={ dummyText }
              dark={true}
              id="section6"
          />
          <Section
              title="Contact Us"
              subtitle={ dummyText }
              dark={true}
              id="section7"
          />
      </div>
    );
  }
}

export default App;
