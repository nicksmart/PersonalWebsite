import React, { Component } from 'react';
import '../styles/Home.css';
import Banner from '../assets/images/Website-Banner.jpg';
import NavBar from './NavBar';
import Introduction from './Introduction';
import ProfessionalBackground from './ProfessionalBackground';
import Recruit from './Recruit';
import Personal from './Personal';
import Footer from './Footer';

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        'Introduction',
        'ProfessionalBackground',
        'Recruit'
      ]
    };

    this.generateCards = this.generateCards.bind(this);
  }

  generateCards() {
    // FIGURE OUT HOW TO GET THIS FUNCTION WORKING LATER
    
    let cards = [];
    this.state.cards.forEach((elt) => {
      const firstStr = (elt === 'Introduction') ? 'App-content-card-first' : '';
      cards.push(
        <div className={`App-content-card ${firstStr}`}>
          <div className={`App-${elt}`}>
            {React.createElement(elt)}
          </div>
        </div>
      );
    });

    console.log(cards);

    return cards;
  }

  scrollTo(sectionID) {
    const elt = document.getElementById(sectionID);
    elt.scrollIntoView(true);
  }
  
  render() {

    // const contentCards = this.generateCards();
    // console.log(contentCards);

    // Adding this alert so users know that site isn't mobile responsive yet
    if (window.innerWidth < 1024) {
      alert('NOTE:\nI have not made this site mobile responsive yet. It\'s on my list of things to do');
    }
    
    return (
      <div className="AppWrapper">
        
        <div className="App-header">
          <div>
            <img className="App-header_photo" src={Banner} alt="Website Banner" />
          </div>
        </div>

        <div className="App-content">
          <NavBar />

          <div id="App-Introduction" className="App-content-card App-content-card-first">
            <div className="App-Introduction">
              <Introduction />
            </div>
          </div>
          <div id="App-ProfessionalBackground" className="App-content-card">
            <div className="App-ProfessionalBackground">
              <ProfessionalBackground />
            </div>
          </div>
          <div id="App-Recruit" className="App-content-card">
            <div className="App-Recruit">
              <Recruit />
            </div>
          </div>
          <div id="App-Personal" className="App-content-card">
            <div className="App-Personal">
              <Personal />
            </div>
          </div>
        </div>

        <Footer />

      </div>
    );
  }
}

export default Home;
