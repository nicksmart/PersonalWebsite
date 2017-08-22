import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header_photo" />
        <div className="App-header">
          <h1 className="App-header-myname">Nick Smart</h1>
          <p className="App-header-myinfo">
            Software Engineer<br>
            </br>University of Michigan<br>
            </br>Computer Science Engineer in the College of Engineering<br>
            </br>Business Minor in the Stephen M. Ross School of Business<br></br>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
