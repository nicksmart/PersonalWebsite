import React, { Component } from 'react';
import '../styles/Personal.css';
import '../styles/Home.css';

export default class Personal extends Component {
  render() {
    return(
      <div className="Personal">
        <div className="Personal-text">
          <h1 className="Content-header">Personal</h1>
          <p className="Personal-paragraph">
            I'm currently working on creating the content for this section.
          </p>
        </div>
      </div>
    );
  }
}