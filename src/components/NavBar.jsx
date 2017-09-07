import React, { Component } from 'react';
import '../styles/NavBar.css';
import '../styles/Home.css';

export default class NavBar extends Component {
  
  constructor(props) {
    super(props);
  }
  
  scrollTo(sectionID) {
    const elt = document.getElementById(sectionID);
    console.log(elt);
    if (elt) {
      elt.scrollIntoView({
        behavior: "smooth" // This is not supported in Chrome for some reason ¯\_(ツ)_/¯
      });
    }
  }
  
  render() {
    return(
      <div className="App-NavBar-wrapper">
        <nav className="App-nav" id="nav">
          <ul>
            <li>
              <a
                className="App-navlink"
                href="#intro"
                onClick={() => this.scrollTo('App-Introduction')}>
                Introduction
              </a>
            </li>
            <li>
              <a
                className="App-navlink"
                href="#background"
                onClick={() => this.scrollTo('App-ProfessionalBackground')}>
                Professional Background
              </a>
            </li>
            <li>
              <a
                className="App-navlink"
                href="#recruit"
                onClick={() => this.scrollTo('App-Recruit')}>
                Recruit
              </a>
            </li>
            <li>
              <a
                className="App-navlink"
                href="#personal"
                onClick={() => this.scrollTo('App-Personal')}>
                Personal
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}