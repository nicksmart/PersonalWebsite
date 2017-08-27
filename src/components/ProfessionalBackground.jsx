import React, { Component } from 'react';
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

  logState() {
    console.log(this.state);
  }

  toggleDetailedView() {
    this.setState({
      isDetailedView: !this.state.isDetailedView
    });
  }
  
  render() {
    // this.logState();

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

        <div className="ProfessionalBackground-textcontent">
          <p>
            I started programming in my senior year of high school in my AP Computer Science class. 
            It was there that I discovered my passion for writing code and my potential to contribute to the world around me by writing software.<br /><br />
            I'm now in my third year the University of Michigan where I am a Computer Science Engineering major in the College of Engineering. 
            I still carry the same passion for coding that I did when I first picked it up 3 years ago.<br /><br />
            I'm also very much interested in business, particularly finance and entrepreneurship. 
            Because of this, I declared a Minor in Business through the Stephen M. Ross School of Business at the University of Michigan.<br /><br />
            So far, I have worked in industry as a software engineer intern for Cubic Transportation Systems during the summer of 2016 and 
            Intuit's Consumer Tax Group (AKA TurboTax) in the summer of 2017.<br /><br />
            To find out more about my academic and professional experience thus far in industry, click the button below!
          </p>
        </div>

        <div className="ProfessionalBackground-moreinfo-button">
          <button className="btn btn-primary" onClick={() => this.toggleDetailedView()}>More Info</button>
        </div>
      </div>
    );
  }
}