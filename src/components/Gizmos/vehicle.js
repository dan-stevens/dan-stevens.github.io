import React from 'react';
import {Gizmo} from './gizmo';
import {Frame} from './frame';
import updateMonitor from './monitor';

export class Vehicle extends React.Component {
	constructor(props) {
	  super(props);

	  this.state = {
	    displayFrame: false,
	    currentFrameTypeId: 0,
        frameTypes: [
	    {
	      id: 0,
		  frameTypeName: 'ice-cream-truck'
	    },
	    {
	      id: 1,
		  frameTypeName: 'fire-truck'
	    }
		] 
	  }	  
	}

	componentWillUpdate(prevProps, prevState) {	
		//Bring in frame
		if (this.props.displayFrame && this.state.displayFrame === false && prevState.displayFrame === false) {	
		  updateMonitor('Vehicle componentWillUpdate called');					
	      this.setState({
			displayFrame: true
		  });			
		}
		
		//Remove frame
		if (!this.props.displayFrame && this.state.displayFrame === true && prevState.displayFrame === true) {								
	      this.setState({
			displayFrame: false
		  })
		}

		
	}

	componentWillUnmount() {			
		this.props.newVehicle();
		this.setState({
			displayFrame: false
		});
  	}

	cycleFrameType = (currentFrameType) => {
		console.log('cycleFrameType: ' + currentFrameType);
		console.log('this.state.frameTypes.length: ' + this.state.frameTypes.length)
		if (currentFrameType < this.state.frameTypes.length - 1) {
			this.setState({
				currentFrameTypeId: this.state.currentFrameTypeId + 1		
			});
		}
		else {
			this.setState({
				currentFrameTypeId: 0
			})
		}	
	}	
	
	render() {

		let frame;


		if (this.state.displayFrame) {
			console.log(this.props.currentFrameOption);
			frame = <Frame 
				currentFrameType={this.state.frameTypes[this.state.currentFrameTypeId]} 
				cycleFrameType={this.cycleFrameType} 
				currentFrameOption={this.props.currentFrameOption.frameOptionName}
			/>
		}

		return (
			<div className='vehicle' id={'vehicleId' + this.props.currentVehicleId}>
				<Gizmo />				
				{frame}
			</div>
		)
	}
}