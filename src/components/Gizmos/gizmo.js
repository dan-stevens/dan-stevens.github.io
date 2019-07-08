import React from 'react';
import {GizmoControls} from './gizmoControls';

export class Gizmo extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      backgroundColor: this.blockPaint(),
      width: '200px',
      height: '100px',
      borderRadius: '0px',
      preMountEvents: ''
    };
    this.toggleWidth = this.toggleWidth.bind(this);
    this.toggleCorners = this.toggleCorners.bind(this);
    this.componentLifeCycleEvent = this.componentLifeCycleEvent.bind(this);
  }

  blockPaint() {
  	const possibleBlockColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  	const blockColor = Math.floor(Math.random() * possibleBlockColors.length);
   	return possibleBlockColors[blockColor];
  }

  blockHeight() {
    this.setState({
	  height: this.state.height === '100px' ? '200px' : '100px'
    });
  }

  toggleWidth() {
	this.setState({
		width: this.state.width === '200px' ? '300px' : '200px'
	});
  }

  toggleCorners() {
	this.setState({
		borderRadius: this.state.borderRadius === '0px' ? '50px' : '0px'
	});
  }

  buildMonster() {

  }

  componentLifeCycleEvent(lifeCycleEvent, prevProps, prevState) {
    var node = document.createElement("li");
    var lifeCycleEventText = document.createTextNode(lifeCycleEvent);
    if(prevProps) {
  	  console.log('prevProps: ' + prevProps);
    }
    if(prevState) {
  	  console.log('prevState: ' + prevState.backgroundColor);
    }
  
    node.appendChild(lifeCycleEventText);
    this.myRef.current.innerHTML += node.outerHTML;
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
	console.log('the Gizmo component did update');
	if (prevState !== this.state) {
		this.componentLifeCycleEvent('componentDidUpdate called', prevProps.number, prevState);
	}
	if (prevProps.number !== this.props.number) {
		console.log('theres a difference here');
		console.log('prevProps:');
		console.log(prevProps);
		console.log('this.props');
		console.log(this.props)
	}
  }

  componentWillUnmount() {
    alert('siyanara sucker');
  }

  render() {
	return (
	  <div className='gizmo' id={this.props.number} ref={this.props.number}>
		<div style={{
			backgroundColor: this.state.backgroundColor,
			width: this.state.width,
			borderRadius: this.state.borderRadius
			}}><span>My ref prop: {this.props.number}</span>
		</div>
		<ul ref={this.myRef} className='gizmo-details'>
		<li>{this.state.preMountEvents}</li>
		</ul>

		<GizmoControls 
			onChangeColor={this.toggleColor}
			onChangeHeight={this.toggleHeight}
			onChangeWidth={this.toggleWidth}
			onChangeCorners={this.toggleCorners}
      onBuildMonster={this.buildMonster}
		/>
	  </div>
    )
  }
}