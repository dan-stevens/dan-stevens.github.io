import React from 'react';

export class GizmoControls extends React.Component {
	render() {
		return(
				<div className='gizmo-controls'>
					<input type="range" min="100" max="100000" val="1000" step="1000" ></input>
					<button onClick={this.props.onChangeWidth}>Toggle width</button>
					<button onClick={this.props.onChangeCorners}>Toggle Corners</button>
					<button onClick={this.props.onBuildMonster}>Convert me!</button>
				</div>
		)	
	}
}