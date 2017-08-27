import React, { Component } from 'react';
import '../styles/Home.css';
import Introduction from './Introduction';
// import ScrollingColorBackground from 'react-scrolling-color-background';
// import $ from 'jquery';

// const BackgroundColors = {
//   // background1: '#7d99b5',
//   // background2: '#123456',
//   // background3: '#012d4b'
//   background1: 'rgb(125, 153, 181)',
//   background2: 'rgb(18, 52, 86)',
//   background3: 'rgb(1, 45, 75)'
// };

class Home extends Component {
  
  // selectBackgroundColor() {
  //   $( window ).ready(() => {
      
  //       var wHeight = $(window).height();
    
  //       $('.slide')
  //         .height(wHeight)
  //         .scrollie({
  //           scrollOffset : -50,
  //           scrollingInView : function(elem) {
                       
  //             var bgColor = elem.data('background');
              
  //             $('body').css('background-color', bgColor);
              
  //           }
  //         });
    
  //     });
  // }
  
  render() {
    
    return (
      <div className="AppWrapper">
        
        {/* <ScrollingColorBackground
          selector='.js-color-stop[data-background-color]'
          colorDataAttribute='data-background-color'
          initialRgb='rgb(0, 0, 0)'
        /> */}
        
        <div className="App-header">
          <div className="App-header_photo" />
          <h1 className="App-header-myname">Nick Smart</h1>
        </div>
        <div className="App-content">
          <div className="Introduction">
            <div>
              <nav className="App-nav" id="nav">
                <ul>
                  <li><a className="App-navlink activebutton" href="#intro">Introduction</a></li>
                  <li><a className="App-navlink" href="#first">First Section</a></li>
                  <li><a className="App-navlink" href="#second">Second Section</a></li>
                  <li><a className="App-navlink" href="#cta">Get Started</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
