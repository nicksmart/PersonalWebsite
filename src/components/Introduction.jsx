import React, { Component } from 'react';
import '../styles/Introduction.css';
import '../styles/Home.css';

export default class Introduction extends Component {
  render() {
    return(
      <div className="Introduction">
        <div className="Introduction-text">
          <h1 className="Content-header">Introduction</h1>
          <p>
            Hi! My name is Nick and I'm a software developer from San Diego, California. 
            I'm a junior at the University of Michigan studying Computer Science Engineering and minoring in business. 
            After college, I hope to be a versatile full stack software engineer.<br /><br />
            Welcome to my website!
          </p>
        </div>
        <div className="Introduction-image" />
      </div>
    );
  }
}