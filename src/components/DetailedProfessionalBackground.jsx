import React, { Component } from 'react';
import '../styles/DetailedProfessionalBackground.css';
import '../styles/Home.css';

export default class DetailedProfessionalBackground extends Component {
  render() {
    return(
      <div className="DetailedProfessionalBackground">
        <h1 className="NothingYet">
          There is no content here yet. 
          I'm currently working on creating the more detailed content for this section
        </h1>

        <div className="DetailedProfessionalBackground-info-button">
          <button className="btn btn-primary" onClick={() => this.props.toggleDetailedView()}>Less Info</button>
        </div>
      </div>
    );
  }
}