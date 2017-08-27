import React, { Component } from 'react';
import '../styles/ProfessionalBackground.css';
import '../styles/Home.css';
import MichiganImage from '../assets/images/um_pic-sm.jpg';

export default class ProfessionalBackground extends Component {
  render() {
    return(
      <div className="ProfessionalBackground">
        <h1 className="Content-header Content-header-centered">Professional Background</h1>
        <div className="ProfessionalBackground-content">
          <div className="ProfessionalBackground-imagecontainer">
            <img
              className="ProfessionalBackground-content-image ProfessionalBackground-content-image-Michigan"
              src={MichiganImage}
            />
          </div>
          {/* <div className="ProfessionalBackground-content-image ProfessionalBackground-content-image-Intuit" />
          <div className="ProfessionalBackground-content-image ProfessionalBackground-content-image-Cubic" />
          <div className="ProfessionalBackground-content-image ProfessionalBackground-content-image-VReps" /> */}
        </div>
      </div>
    );
  }
}