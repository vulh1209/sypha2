// import logo from './logo.svg';
// import MenuBG from './img/MenuBG.svg';
// import Banner from './img/Banner.svg';

import Logo from "./img/Logo.svg";
import TextClock from "./img/TextClock.svg";
import "./App.css";

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
            <img id="textclock" alt="the main story" src={TextClock} />
          </div>
          <div id="paragraph2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </div>
        </div>
        <div id="gameplay"></div>
        <div id="dogeagent"></div>
      </div>
    </div>
  );
}

export default App;
