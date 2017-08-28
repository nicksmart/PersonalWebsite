import React, { Component } from 'react';
import '../styles/Recruit.css';
import '../styles/Home.css';
// import ResumeIcon from '../assets/images/resume_icon.png';
import ResumeIcon2 from '../assets/images/resume_icon2.png';
import Resume from '../assets/documents/Web_Resume.pdf';

export default class Recruit extends Component {
  
  render() {
    return(
      <div className="Recruit">
        <h1 className="Content-header Content-header-centered">Recruiting</h1>
        <div className="Recruit-resumediv">
          <a href={Resume} className="Recruit-resume" target="_blank">
            <img className="Recruit-resume" src={ResumeIcon2} alt="Resume" />
          </a>
        </div>
        <div className="Recruit-content">
          <p>
            I'm currently looking for software engineering internships for the summer of 2018.
            I would like to have an internship doing backend development work this upcoming summer.
            I'm open to any location, but I have a strong preference for California.<br /><br />
            I'm passionate about all things technology and I want to constantly be pushing myself to become a better programmer.
            I'm also particularly interested in working with technology to help improve people's financial success and wellbeing.<br /><br />
            A link to my Github can be found  
            <a href="https://github.com/nicksmart" target="_blank"> here. </a>
            I have my personal projects posted publicly on there and my school projects posted privately due to my school's Honor Code.<br /><br />
            If you'd like to reach out to my personally regarding recruiting matters, please send me an email
            <a href="mailto:npsmart@umich.edu" target="_blank"> here.</a>
          </p>
        </div>
      </div>
    );
  }
}