import React, { Component } from 'react';
import '../styles/Footer.css';
import LinkInIcon from '../assets/images/linked_icon.png';
import EmailIcon from '../assets/images/email_icon.png';
import FacebookIcon from '../assets/images/facebook_icon.png';
import GithubIcon from '../assets/images/github-icon.png';

export default class Footer extends Component {
  render() {
    return(
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
    );
  }
}