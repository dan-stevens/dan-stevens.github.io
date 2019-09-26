import React from 'react';

export class GizmoControls extends React.Component {

	render() {

        let disableGizmo;
        let disablePaint;
        let disableFrame;
        let disableDecal;
        let disableRollout;

        if (this.props.disableGizmoButton) {
          disableGizmo = 'gizmo-button-diabled';
        }

		if (this.props.disablePaintButton) {
          disablePaint = 'gizmo-button-diabled';
		}

        if (this.props.disableFrameButton) {
          disableFrame = 'gizmo-button-diabled';
        }

        if (this.props.disableDecalButton) {
          disableDecal = 'gizmo-button-diabled';
        }

        if (this.props.disableRolloutButton) {
          disableRollout = 'gizmo-button-diabled';
        }

		return(
			<div className='gizmo-converter'>
			   <div className='gizmo-button-new-gizmo-container'>
                  <div className={`gizmo-button gizmo-button-new ${disableGizmo}`}
                  	onMouseDown={gizmoButtonMouseDown} 
                  	onMouseUp={gizmoButtonMouseUp} 
                  	onMouseOut={gizmoButtonMouseUp} 
                  	onClick={() => this.props.bringInGizmo()}>
                    <i className="fas fa-plus"></i>
                  </div>
                  <div className='gizmo-button-detail' />
                </div>                                              
			<div className='gizmo-button-paint-container'>
                	<div className={`gizmo-button gizmo-button-paint ${disablePaint}`}
                	  onMouseDown={gizmoButtonMouseDown} 
                	  onMouseUp={gizmoButtonMouseUp} 
                	  onMouseOut={gizmoButtonMouseUp} 
                	  onClick={() => this.props.mechanicWork(this.cycleFrameOption)}>
                		<i className="fas fa-paint-brush"></i>
                	</div>
                	<div className='gizmo-button-detail' />
                </div>  
			<div className='gizmo-button-frame-container'>
                	<div className={`gizmo-button gizmo-button-frame ${disableFrame}`}
                	  onMouseDown={gizmoButtonMouseDown} 
                	  onMouseUp={gizmoButtonMouseUp} 
                	  onMouseOut={gizmoButtonMouseUp} 
                	  onClick={this.props.newFrame}>
                	  <i className="fas fa-cogs"></i>
                	</div>
                	<div className='gizmo-button-detail' />
                </div>
			<div className='gizmo-button-decals-container'>
                	<div className={`gizmo-button gizmo-button-decals ${disableDecal}`}
                      onMouseDown={gizmoButtonMouseDown} 
                      onMouseUp={gizmoButtonMouseUp}
                      onMouseOut={gizmoButtonMouseUp}>
                	  <i className="fab fa-autoprefixer"></i>
                	</div>
                	<div className='gizmo-button-detail' />
                </div>
                 <div className='gizmo-button-build-container'>
                	<div className={`gizmo-button-large gizmo-button-build ${disableRollout}`}             	   
                	  onMouseDown={gizmoButtonMouseDown} 
                	  onMouseUp={gizmoButtonMouseUp} 
                	  onMouseOut={gizmoButtonMouseUp} 
                	  onClick={this.props.rollOutVehicle}>
                	  <i className="fas fa-bold"></i>
                	</div>
                	<div className='gizmo-button-large-detail' />
                </div>
              </div>
		)	
	}
}

const gizmoButtonMouseDown = (e) => {
	e.target.classList.add('gizmo-button-mousedown');
}

const gizmoButtonMouseUp = (e) => {
	e.target.classList.remove('gizmo-button-mousedown');
}