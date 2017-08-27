import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../styles/Home.css';

class Home extends Component {
  render() {
    
    return (
      <div className="AppWrapper">
        
        <div className="App-header">
          <div className="App-header_photo" />
          <h1 className="App-header-myname">Nick Smart</h1>
        </div>
        <div className="App-content">
          <nav className="App-nav" id="nav">
            <ul>
              <li><a className="App-navlink" href="#intro">Introduction</a></li>
              <li><a className="App-navlink" href="#first">First Section</a></li>
              <li><a className="App-navlink" href="#second">Second Section</a></li>
              <li><a className="App-navlink" href="#cta">Get Started</a></li>
            </ul>
          </nav>
        </div>

      </div>
    );
  }
}

export default Home;
