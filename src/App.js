import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    MainHeroContainer,
} from "./styles";
import Navigation from "./components/Navigation";
import MainHero from "./components/MainHero";
import WhySection from "./components/WhySection";

function App() {
  return (
    <div className="App">
        <MainHeroContainer>
            <Navigation/>
            <MainHero/>
            <WhySection/>
            
        </MainHeroContainer>
    </div>
  );
}

export default App;
