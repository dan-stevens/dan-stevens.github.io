//This is the child. It has no state but is passed a function from its parent that lets you update it's parent's state
import React from 'react';

export class ButtonTwo extends React.Component {
	
	//I know we'll need to render something...
	render() {
		return(
			<button onClick={this.props.onClick}>Click Me Damnit</button>
			);
	}
}