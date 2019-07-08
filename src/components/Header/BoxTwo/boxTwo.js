//This is the parent, it has a state
import React from 'react';
import { ButtonTwo } from '../../Button/buttonTwo';

export class BoxTwo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			clicks : 0
		}
		//Set the inital state
		//Bind the function below to this current iteration of the module
		this.updateBoxTwo = this.updateBoxTwo.bind(this);
		//console.log(this.state.clicks);
	}

		componentWillReceiveProps(nextProps) {
		//console.log('componentWillRecieveProps: component will recive some new prop(s)');

	}


	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('totalClicks before ' + this.state.clicks);
	// 	console.log('ShouldComponentUpdate: Before re-rendering (can be cancelled by returning false)');
	// 	return true;
	// }


	// componentWillUpdate(nextProps, nextState) {
	// 	console.log(nextState.clicks + ' componentWillUpdate: Before re-rendering');
	// }


	// componentDidUpdate(prevProps, prevState) {
	// 	console.log(prevState.clicks + ' componentDidUpdate: after components updated in the DOM');
	// 	console.log('after ' + this.state.clicks);
	// }

	//Here is the function that we will pass the the child to be called on some sort of event
	//It should update the state somehow...
	updateBoxTwo() {
		
		const totalClicks = this.state.clicks;
		
		this.setState({
			clicks : totalClicks + 1
		});
		
	}

	//Time to render the child and pass the function above to it
	render() {
		return (
			<ButtonTwo onClick={this.updateBoxTwo} />
			);
	}

}