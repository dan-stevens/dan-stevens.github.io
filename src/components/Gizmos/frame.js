import React from 'react';
import {SVGFrame} from './svgFrame';
import './frame.css';

export class Frame extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	componentWillUpdate(prevProps, prevState) {	
	}

	componentWillUnmount() {
		this.props.cycleFrameType(this.props.currentFrameType.id);
		// if (this.state.currentFrameType === this.state.frameTypes.length) {
		// 	console.log('here');
		// 		this.setState({
		// 			currentFrameType: 0
		// 		})
		// 	} else {
		// 		console.log('ok here');
		// 		this.setState({
		// 			currentFrameType: this.state.currentFrameType + 1
		// 		})
		// 	}
	}

	render() {
		return (
		  <SVGFrame
            id='frame'
            frameType={this.props.currentFrameType.frameTypeName}
            frameOption={this.props.currentFrameOption}           
		  />
		)
	}
}



