import React from 'react';
import updateMonitor from './monitor';

export class Gizmo extends React.Component {
  constructor(props) {
    super(props);    
    this.monsterDOMRef = React.createRef(); // Coordinates in DOM used for animation
    this.state = {     
      preMountEvents: ''
    };
    //this.componentLifeCycleEvent = this.componentLifeCycleEvent.bind(this);
  }






  // componentLifeCycleEvent(lifeCycleEvent, prevProps, prevState) {
  //   //document.getElementById('gizmo-updates-screen').prepend(lifeCycleEvent);
  //   updateMonitor(lifeCycleEvent);
  // }

  componentWillMount() {
	// this.setState({
	// 	preMountEvents: 'componentWillMount called'
 // 	});
    //updateMonitor('componentWillMount called');
  }

  componentDidMount() {
    updateMonitor('Gizmo componentDidMount called');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      //updateMonitor('Gizmo componentDidUpdate called');

  	}
  }  

  render() {

    

	return (    
	  <div className='gizmo' id={'gizmoId'} ref={this.monsterDOMRef}>
      <div className='wheel' />
      <div className='wheel' />
    </div>
    )
  }
}