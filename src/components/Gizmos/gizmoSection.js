import React from 'react';

import {Gizmo} from './gizmo';

import './gizmo.css';

export class GizmoSection extends React.Component {
  constructor(props) {
	super(props);
	this.gizmoRef = React.createRef();
  }
		state = {
		  gizmoCount : 0,
		  gizmoButtonFunction: ''
		}

	createGizmo = () => {
		this.setState({
			gizmoCount: this.state.gizmoCount + 1,
			gizmoButtonFunction: 'createGizmo'
		});
		console.log(this.gizmoRef.current);
	}

	convertGizmo() {
		this.setState({
	  	  gizmoButtonFunction: 'convertGizmo'
	  	});
	  	
	}

	// toggleGizmoButton() {
	//   if (this.state.gizmoButtonFunction === 'createGizmo') {
	//   	this.convertGizmo();	  	
	//   }
	//   else {
	//   	this.createGizmo();
	//   }
	// }

	render() {
		const gizmoChildren = [];
		for(let i = 0; i < this.state.gizmoCount; i++) {
			gizmoChildren.push(<Gizmo key={i} number={i} ref={this.gizmoRef} />)
		}

		return (
		  <div className='gizmos-container'>
		    <section className="gizmo-button-container">
		      <GizmoButton onClick={this.createGizmo} />
		    </section>
			<ParentGizmoContainer>
				{gizmoChildren}
			</ParentGizmoContainer>
            <section className="gizmo-converter">
             <p>need to design a converter</p>
            </section>
            <section className="gizmo-result">
             <p>need to design a gizmo result</p>
            </section>
	      </div>
		)
	}
}

const ParentGizmoContainer = props => (
  <div className="gizmo-creater">
	<div className="GizmosGoHere">
	  {props.children}
    </div>
  </div>
);

class GizmoButton extends React.Component {
  render() {
    
    return (
      <button onClick={this.props.onClick}>Make a Gizmo</button>
    ) 

  }
	// const gizmoFunction = this.state.gizmoButtonFunction === 'createGizmo' ? 'convertGizmo' : 'createGizmo';
	// state = {
	// 	gizmoButtonFunction : gizmoFunction
	// }
}


