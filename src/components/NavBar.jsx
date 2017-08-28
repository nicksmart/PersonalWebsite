import React, { Component } from 'react';
import '../styles/NavBar.css';
import '../styles/Home.css';

export default class NavBar extends Component {
  render() {
    return(
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
    );
  }
}