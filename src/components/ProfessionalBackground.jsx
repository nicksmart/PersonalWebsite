import React, { Component } from 'react';
import MinimalProfessionalBackground from './MinimalProfessionalBackground';
import DetailedProfessionalBackground from './DetailedProfessionalBackground';
import '../styles/ProfessionalBackground.css';
import '../styles/Home.css';
import MichiganImage from '../assets/images/um_pic-sm.jpg';
import IntuitLogo from '../assets/images/logo-intuit-sm.jpg';
import CubicLogo from '../assets/images/cubic-logo-sm.jpg';

export default class ProfessionalBackground extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      isDetailedView: false
    };

    this.toggleDetailedView = this.toggleDetailedView.bind(this);
  }

  toggleDetailedView() {
    this.setState({
      isDetailedView: !this.state.isDetailedView
    });
  }
  
  render() {
    let content = '';
    if (this.state.isDetailedView) {
      content = <DetailedProfessionalBackground toggleDetailedView={this.toggleDetailedView} />;
    } else {
      content = <MinimalProfessionalBackground toggleDetailedView={this.toggleDetailedView} />;
    }

    return(
      <div className="ProfessionalBackground">
        <h1 className="Content-header Content-header-centered">Professional Background</h1>
        
        <div className="ProfessionalBackground-imagecontent">
          <div className="ProfessionalBackground-MichiganImage">
            <img
              className="ProfessionalBackground-content-image ProfessionalBackground-content-image-Michigan"
              src={MichiganImage}
              alt="University of Michigan"
            />
          </div>
          <div className="ProfessionalBackground-IntuitImage">
            <img
              className="ProfessionalBackground-content-image ProfessionalBackground-content-image-Intuit"
              src={IntuitLogo}
              alt="Intuit Logo"
            />
          </div>
          <div className="ProfessionalBackground-CubicImage">
            <img
              className="ProfessionalBackground-content-image ProfessionalBackground-content-image-Cubic"
              src={CubicLogo}
              alt="Cubic Logo"
            />
          </div>
        </div>

        {content}
      </div>
    );
  }
}

// Still want to add in another component for detailed view