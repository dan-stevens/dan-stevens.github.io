import React from 'react';
import { Button } from '../../Button/button'

const styles = {
	transition : 'all 1s ease-out'
}

export class Box extends React.Component {

constructor(props) {
	super(props);
	this.state = {
		opacity: 0,
		scale: 1,
		name: 'dan'
	}

	this.changeName = this.changeName.bind(this);
}

// componentWillMount() {
// 	console.log('componentWillMount: immediately before Stripe is rendered');
// }


// componentDidMount() {
// 	console.log('componentDidMount: immediately after Stripe is rendered');
// }


// componentWillReceiveProps(nextProps) {
// 	console.log('componentWillRecieveProps: component will recive some new prop(s)');
// }


// shouldComponentUpdate(nextProps, nextState) {
// 	console.log('ShouldComponentUpdate: Before re-rendering (can be cancelled by returning false)');
// 	return true;
// }


// componentWillUpdate(nextProps, nextState) {
// 	console.log(nextState.name + ' componentWillUpdate: Before re-rendering');
// }


// componentDidUpdate(prevProps, prevState) {
// 	console.log(prevState.name + ' componentDidUpdate: after components updated in the DOM');
// }


// componentWillUnmount() {
// 	console.log('componentWillUnmount: Component will unmount - bye');
// }

onHide() {
	this.setState({
		opacity: 1
	});
}	

onScale() {
	this.setState({
		scale: this.state.scale > 1 ? 1 : 1.5
	});
}

changeName(newName) {
    this.setState({
      name: newName
    });
  }


render() {
	return (
		<div>
			<div name={this.state.name} style={{...styles, opacity: this.state.opacity, transform: 'scale(' + this.state.scale + ')'}} onClick={this.onScale.bind(this)}> 
		    </div>
		    <Button onClick={this.changeName} />
	    </div>
	 );
	}
}