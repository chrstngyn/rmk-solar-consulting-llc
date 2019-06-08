import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import Section from "./components/Section"
import AboutUs from "./components/AboutUs"
import dummyText from "./dummyText"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Section
            title="RMK Solar Consulting, LLC"
            subtitle="This is placeholder text for this LLC."
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
          <AboutUs
              title="About Us"
              title1="Rodney Kizito"
              occupation1="PhD Student, University of Tennessee"
              description1="This is a placeholder for a description"
              title2="First Last"
              occupation2="PhD Student, University of Tennessee"
              description2="This is a placeholder for a description"
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
