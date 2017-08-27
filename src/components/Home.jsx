import React, { Component } from 'react';
import '../styles/Home.css';
import Introduction from './Introduction';
import ProfessionalBackground from './ProfessionalBackground';
import LinkInIcon from '../assets/images/linked_icon.png';
import EmailIcon from '../assets/images/email_icon.png';
import FacebookIcon from '../assets/images/facebook_icon.png';
import GithubIcon from '../assets/images/github-icon.png';

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

        <div className="App-footer">
          <a href="https://www.facebook.com/nsmart55" target="_blank">
            <img className="App-footer-link" src={FacebookIcon} alt="Facebook Profile" />
          </a>
          <a href="https://www.linkedin.com/in/npsmart" target="_blank">
            <img className="App-footer-link" src={LinkInIcon} alt="LinkedIn Profile" />
          </a>
          <a href="https://github.com/nicksmart" target="_blank">
            <img className="App-footer-link" src={GithubIcon} alt="Github Profile" />
          </a>
          <a href="mailto:npsmart@umich.edu" target="_blank">
              <img className="App-footer-link" src={EmailIcon} alt="Email" />
          </a>
          <p className="App-footer-copyright">&copy; Nick Smart</p>
        </div>

      </div>
    );
  }
}

export default Home;
