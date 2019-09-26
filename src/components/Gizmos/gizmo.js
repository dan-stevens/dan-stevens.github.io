import React from 'react';

export class Gizmo extends React.Component {
  constructor(props) {
    super(props);    
    this.monsterDOMRef = React.createRef(); // Coordinates in DOM used for animation
    this.state = {     
      preMountEvents: ''
    };
    this.componentLifeCycleEvent = this.componentLifeCycleEvent.bind(this);
  }






  componentLifeCycleEvent(lifeCycleEvent, prevProps, prevState) {
    document.getElementById('gizmo-updates-screen').prepend(lifeCycleEvent);
  }

  componentWillMount() {
	this.setState({
		preMountEvents: 'componentWillMount called'
 	});
  }

  componentDidMount() {
    this.componentLifeCycleEvent('componentDidMount called');
  }

  componentDidUpdate(prevProps, prevState) {
  	if (prevState !== this.state) {
  		this.componentLifeCycleEvent('componentDidUpdate called', prevProps.number, prevState);
  	}
  	if (prevProps.number !== this.props.number) {
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