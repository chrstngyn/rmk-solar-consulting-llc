import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import Header from "./components/Header";
import Section from "./components/Section"
import SolarEnergyAndYou from "./components/SolarEnergyAndYou";
import ConsultingAreas from "./components/ConsultingAreas";
import AboutUs from "./components/AboutUs"
import dummyText from "./dummyText"
import ProvidedServices from "./components/ProvidedServices";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header
            title="R&S Solar Consulting, LLC."
            // subtitle="This is placeholder text for this LLC."
            dark={true}
            id="section1"
        />
          <SolarEnergyAndYou
              title="Solar Energy and You"
              subtitle1="What is Solar Energy?"
              p1="{ dummyText }"
              subtitle2="Why does Solar Energy Matter?"
              p2="{ dummyText }"
              subtitle3="Ready to Invest in Solar Energy?"
              p3="{ dummyText }"
              dark={true}
              id="section2"
          />
        <ConsultingAreas
            title="Consulting Areas"
            subtitle1="Residential Solar"
            p1="{dummyText}"
            subtitle2="Commercial Solar"
            p2="{dummyText}"
            subtitle3="Utility Scale Solar"
            p3="{dummyText}"
            dark={true}
            id="section3"
        />
          <ProvidedServices
            title="Provided Services"
            dark={true}
            subtitle1="Investment Breakdown"
            p1="{ dummy text }"
            subtitle2="Payback Period Breakdown"
            p2="{ dummy text }"
            subtitle3="Yearly Benefit/Cost Breakdown"
            p3="{ dummy text }"
            subtitle4="Return on Investment Breakdown"
            p4="{ dummy text }"
            subtitle5="Solar System that Fits You"
            p5="{ dummy text }"
            subtitle6="Vendor & Installer Connection"
            p6="{ dummy text }"
            subtitle7="Acquiring a Solar Loan"
            p7="{ dummy text }"
            id="section4"
          />
          <Section
              title="Solar Terms"
              subtitle={ dummyText }
              dark={true}
              id="section5"
          />
          <Section
              title="Helpful Links"
              subtitle={ dummyText }
              dark={true}
              id="section6"
          />
          <AboutUs
              title="About Us"
              title1="Rodney Kizito"
              occupation1="PhD Student, University of Tennessee"
              description1="This is a placeholder for a description"
              title2="Samuel Martinez"
              occupation2="PhD Student, University of Tennessee"
              description2="This is a placeholder for a description"
              dark={true}
              id="section7"
          />
          <Section
              title="Contact Us"
              subtitle={ dummyText }
              dark={true}
              id="section8"
          />
      </div>
    );
  }
}

export default App;
