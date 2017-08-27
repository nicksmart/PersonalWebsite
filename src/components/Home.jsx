import React, { Component } from 'react';
import '../styles/Home.css';
import Introduction from './Introduction';
import ProfessionalBackground from './ProfessionalBackground';
// import ScrollingColorBackground from 'react-scrolling-color-background';
// import $ from 'jquery';

// const BackgroundColors = {
//   // background1: '#7d99b5',
//   // background2: '#123456',
//   // background3: '#012d4b'
//   background1: 'rgb(125, 153, 181)',
//   background2: 'rgb(18, 52, 86)',
//   background3: 'rgb(1, 45, 75)'
// };

class Home extends Component {
  
  render() {
    
    return (
      <div className="AppWrapper">
        
        <div className="App-header">
          <div className="App-header_photo" />
          <h1 className="App-header-myname">Nick Smart</h1>
        </div>

        <div className="App-content">
          <div className="App-NavBar-wrapper">
            <nav className="App-nav" id="nav">
              <ul>
                <li><a className="App-navlink activebutton" href="#intro">Introduction</a></li>
                <li><a className="App-navlink" href="#first">First Section</a></li>
                <li><a className="App-navlink" href="#second">Second Section</a></li>
                <li><a className="App-navlink" href="#cta">Get Started</a></li>
              </ul>
            </nav>
          </div>

          <div className="App-content-card App-content-card-first">
            <div className="App-Introduction">
              <Introduction />
            </div>
          </div>
          <div className="App-content-card">
            <div className="App-ProfessionalBackground">
              <ProfessionalBackground />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
