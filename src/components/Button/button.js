import React from 'react';

export class Button extends React.Component {

constructor(props) {
	super(props);
	this.handleClick = this.handleClick.bind(this);
}

	handleClick() {
		console.log('handleClick Called');
		const newName = 'Daniel';
		this.props.onClick(newName);
	}

	render() {
		return <button onClick={this.handleClick} >Click Me</button>
	} 
}