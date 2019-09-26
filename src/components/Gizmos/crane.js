import React from 'react';
import './crane.css';

export class Crane extends React.Component {
  // state = {
  //   craneFindMonster: false,
  //   cranePickup: false,
  //   craneRaise: false,
  //   craneMoveRight: false,
  //   craneDrop: false
  // }

  render() {
    return (
      <div className="crane-container">
        <div id="crane-arm" />
  	    <div id="crane">
  	      <div id="crane-top" />
  	      <div id="crane-line" />
  	      <div id="crane-claw">
            <div id='crane-claw-left'>
              <i className="fas fa-angle-left"></i>
            </div>
            <div id='crane-claw-right' >
              <i className="fas fa-angle-right"></i>
            </div>
            <div id='crane-claw-detail' />
          </div>
  	    </div>
  	  </div>
    ) 
  }
}