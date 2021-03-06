// import logo from './logo.svg';
// import MenuBG from './img/MenuBG.svg';
// import Banner from './img/Banner.svg';

import Logo from "./img/Logo.svg";
import TextClock from "./img/TextClock.svg";
import TempGP from "./img/TempGamePlay.svg";
import DogeFarming from './img/DogeFarming.svg';
import "./App.css";
import Card from "./Card"

function App() {
  return (
    <div className="App">
      {/* <img id='menubg' src={MenuBG} alt='menubg'/>
      <img id='banner' src={Banner} alt='menubg'/> */}

      <div id="menubg"></div>
      <div id="wrap">
        <div id="banner">
          <div id="wrap-banner">
            <img id="logo" alt="sypha" src={Logo} />
            <div id="paragraph1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <div id="mainstory">
          <div id="clock">
            {/* <img id="textclock" alt="the main story" src={TextClock} /> */}
            <p id="textclock">THE MAIN STORY</p>
          </div>
          <div id="paragraph2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </div>
        </div>
        <div id="gameplay">

          <div id="gameplay-left">
            <p id="gameplay-title">GAMEPLAY</p>
            <p id="gameplay-subtitle">Many play. Such fascinate!</p>
            <p id="gameplay-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Card id='farm' linkimg={TempGP} title_='Doge Farming' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' linklearnmore='google.com' />
            <Card id='farm' linkimg={TempGP} title_='Doge Evolving' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' linklearnmore='google.com' />
          </div>
          <div id="gameplay-right">
            <Card id='farm' linkimg={TempGP} title_='Doge Socializing' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' linklearnmore='google.com' />
            <Card id='farm' linkimg={TempGP} title_='Doge Fighting' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' linklearnmore='google.com' />
          </div>
        </div>
        <div id="dogeagent"></div>
      </div>
    </div>
  );
}

export default App;
