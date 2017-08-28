import React, { Component } from 'react';
import ReactPDF from 'react-pdf';
import '../styles/Recruit.css';
import '../styles/Home.css';
import ResumeIcon from '../assets/images/resume_icon.png';
import Resume from '../assets/documents/Resume.pdf';

export default class Recruit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResume: false
    };

    // this.toggleShowResume = this.toggleShowResume.bind(this);
  }

  // toggleShowResume() {
  //   this.setState({
  //     showResume: !this.state.showResume
  //   });
  // }
  
  render() {
    // const resume = (this.state.showResume) ? <ReactPDF file={Resume} /> : '';
    
    return(
      <div className="Recruit">
        <h1 className="Content-header Content-header-centered">Recruiting</h1>
        <div className="Recruit-resumediv">
          <button className="Recruit-resume" target="_blank">
            <img className="Recruit-resume" src={ResumeIcon} alt="Resume" />
          </button>
        </div>
      </div>
    );
  }
}