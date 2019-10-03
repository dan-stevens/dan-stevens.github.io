import React from 'react';
import {SVGFrame} from './svgFrame';
import updateMonitor from './monitor';
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



