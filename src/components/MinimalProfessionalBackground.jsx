import React, { Component } from 'react';
import '../styles/MinimalProfessionalBackground.css';
import '../styles/Home.css';

export default class MinimalProfessionalBackground extends Component {
  render() {
    return(
      <div className="MinimalProfessionalBackground">
        <div className="MinimalProfessionalBackground-textcontent">
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

        <div className="MinimalProfessionalBackground-info-button">
          <button className="btn btn-primary" onClick={() => this.props.toggleDetailedView()}>More Info</button>
        </div>
      </div>
    );
  }
}