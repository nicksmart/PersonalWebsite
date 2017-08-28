import React, { Component } from 'react';
import '../styles/Home.css';
import Introduction from './Introduction';
import ProfessionalBackground from './ProfessionalBackground';
import Recruit from './Recruit';
import Footer from './Footer';

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
          <div className="App-content-card">
            <div className="App-Recruit">
              <Recruit />
            </div>
          </div>
        </div>

        <Footer />

      </div>
    );
  }
}

export default Home;
