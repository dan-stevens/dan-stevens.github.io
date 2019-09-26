import React from 'react';
import {Vehicle} from './vehicle';
import {Crane} from './crane';
import {Frame} from './frame';
import {Monster} from './monster';
import {FloatingMonster} from './floatingMonster';
import {GizmoControls} from './gizmoControls';
import * as animation from './gizmoAnimations.js';
import './gizmo.css';
import './mechanic.css';
import './monster.css';
import './floatingMonster.css';
import './vehicle.css';

export class GizmoSection extends React.Component {
  constructor(props) {
	super(props);
	//this.rollOutVehicle = this.rollOutVehicle.bind(this);
	this.toggleComponent = this.toggleComponent.bind(this);
	//this.bringInElement = this.bringInElement.bind(this);
	this.newFrame = this.newFrame.bind(this);
	this.newVehicle = this.newVehicle.bind(this);
  }
  state = {
  	animationQueue: [],
    animationQueuePriority: 0,
    currentAnimation: [],
    craneCurrentlyAnimating: false,
  	displayVehicle: true,
    currentVehicleId: 0, 
    displayFrame: false,
    currentFrameOptionId: 0,
	frameOptions: [
		{
			frameOptionName: 'default'
		},
		{
		    frameOptionName: 'cool'
		},
		{
			frameOptionName: 'hot'
		},
		{
			frameOptionName: 'eco'
		},
		{
			frameOptionName: 'classic'
		},
		{
			frameOptionName: 'sleek'
		},
		{
			frameOptionName: 'rusty'
		}
	],
	disableGizmoButton: false,
	disableFrameButton: true,
	disablePaintButton: true,
	disableDecalButton: true,
	disableRolloutButton: true
  }

  	newVehicle() {
  		this.setState({
  			displayVehicle: true,
  			displayFrame: false,
  			currentFrameOptionId: 0
  		})
  	}

	newFrame() {
	  if (!this.state.disableFrameButton) {			
		//If we have a frame already, remove it
		if (this.state.displayFrame) {			
			this.mechanicRemovePart();
		} else {
			this.toggleComponent('displayFrame');
			this.bringInFrame();
		}
	  }
	}

	cycleFrameOption = () => {
		if (this.state.currentFrameOptionId < this.state.frameOptions.length - 1) {
			this.setState({				
				currentFrameOptionId: this.state.currentFrameOptionId + 1	
			});
		}
		else {
			this.setState({
				currentFrameOptionId: 0
			});
		}
	}

	// bringInWheels() {
	// 	if(!this.state.craneCurrentlyAnimating) {
	// 		this.setState({
	// 		  animationQueue: [
	// 			  {
	// 			  	animationName: 'craneOffScreen',
	// 			  	animationSequence: animation.craneOffScreen,
	// 			  	priority: 1
	// 			  },
	// 			  {
	// 			  	animationName: 'craneIntoScreen',
	// 			  	animationSequence: animation.craneIntoScreen,
	// 			  	priority: 2
	// 			  },
	// 			  {
	// 			  	animationName: 'elementIntoScreen',
	// 			  	animationSequence: animation.elementIntoScreen,
	// 			  	element: element + '0',
	// 			  	priority: 2
	// 			  },
	// 			  {
	// 			  	animationName: 'craneClawLower',
	// 			  	animationSequence: animation.craneClawLower,
	// 			  	priority: 3
	// 			  },
	// 			  {
	// 			  	animationName: 'elementLower',
	// 			  	animationSequence: animation.elementLower,
	// 			  	element: 'a',
	// 			  	priority: 3
	// 			  },
	// 			  {
	// 			  	animationName: 'craneClawLeftOpen',
	// 			  	animationSequence: animation.craneClawLeftOpen,
	// 			  	priority: 4
	// 			  },
	// 			  {
	// 			  	animationName: 'craneClawRightOpen',
	// 			  	animationSequence: animation.craneClawRightOpen,
	// 			  	priority: 4  	
	// 			  },
	// 			  {
	// 			  	animationName: 'craneClawRaise',
	// 			  	animationSequence: animation.craneClawRaise,
	// 			  	priority: 5
	// 			  },
	// 			  {
	// 			  	animationName: 'craneReset',
	// 			  	animationSequence: animation.craneReset,
	// 			  	priority: 6
	// 			  },
	// 			  {
	// 			  	animationName: 'craneOffScreen',
	// 			  	animationSequence: animation.craneOffScreen,
	// 			  	priority: 7
	// 			  },
	// 			  {
	// 			  	animationName: 'craneIntoScreen',
	// 			  	animationSequence: animation.craneIntoScreen,
	// 			  	priority: 8
	// 			  },
	// 			  {
	// 			  	animationName: 'elementIntoScreen',
	// 			  	animationSequence: animation.elementIntoScreen,
	// 			  	element:
	// 			  	priority: 8
	// 			  },
	// 			  {
	// 			  	animationName: 'craneClawLower',
	// 			  	animationSequence: animation.craneClawLower,
	// 			  	element: element,
	// 			  	priority: 9
	// 			  },
	// 			  {
	// 			  	animationName: 'elementLower',
	// 			  	animationSequence: animation.elementLower,
	// 			  	element: 
	// 			  	priority: 9
	// 			  },
	// 			  {
	// 			  	animationName: 'craneClawLeftOpen',
	// 			  	animationSequence: animation.craneClawLeftOpen,
	// 			  	priority: 10
	// 			  },
	// 			  {
	// 			  	animationName: 'craneClawRightOpen',
	// 			  	animationSequence: animation.craneClawRightOpen,
	// 			  	priority: 10 	
	// 			  },
	// 			  {
	// 			  	animationName: 'craneClawRaise',
	// 			  	animationSequence: animation.craneClawRaise
	// 			  	priority: 11
	// 			  },
	// 			  {
	// 			  	animationName: 'craneReset',
	// 			  	animationSequence: animation.craneReset,
	// 			  	priority: 12
	// 			  }
	// 			]
	// 		})
	// 	}
	// }
	// cycleWheelOption = () => {
	// 	this.setState({
	// 		currentWheelOption: this.state.currentWheelOption + 1,			
	// 	})		
	// }

	toggleComponent(componentState) {		
		this.setState({
			[componentState]: !this.state[componentState]
		});
	}

	bringInGizmo() {	
		if (!this.state.craneCurrentlyAnimating) {			
		this.setState({
		craneCurrentlyAnimating: true,
		displayGizmo: true,
		animationQueue: [
		  {
		  	animationName: 'craneOffScreen',
		  	animationSequence: animation.craneOffScreen,
		  	priority: 1
		  },
		  {
		  	animationName: 'craneIntoScreen',
		  	animationSequence: animation.craneIntoScreen,
		  	priority: 2
		  },
		  {
		  	animationName: 'gizmoIntoScreen',
		  	animationSequence: animation.gizmoIntoScreen,
		  	priority: 2
		  },
		  {
		  	animationName: 'craneClawLeftOpen',
		  	animationSequence: animation.craneClawLeftOpen,
		  	priority: 3  	
		  },
		  {
		  	animationName: 'craneClawRightOpen',
		  	animationSequence: animation.craneClawRightOpen,
		  	priority: 3  	
		  },		  
		  {
		  	animationName: 'gizmoFall',
		  	animationSequence: animation.gizmoFall,
		  	priority: 4
		  },
		  {
		  	animationName: 'dustClouds',
		  	animationSequence: animation.dustClouds,
		  	element: 'clouds',
		  	priority: 5,
		  	editState: [{key: 'disableFrameButton', value: false}]
		  },
		  {
		  	animationName: 'craneClawLeftClose',
		  	animationSequence: animation.craneClawLeftClose,
		  	priority: 5  	
		  },
		  {
		  	animationName: 'craneClawRightClose',
		  	animationSequence: animation.craneClawRightClose,
		  	priority: 5  	
		  },
		  {
		  	animationName: 'craneReset',
		  	animationSequence: animation.craneReset,
		  	priority: 5,
		  	editState: [{key: 'disableGizmoButton', value: true}]
		  }
		  ]
		});		
	 }
	}

	bringInFrame() {	
		if (!this.state.craneCurrentlyAnimating) {		
		this.setState({
		craneCurrentlyAnimating: true,
		displayGizmo: true,
		animationQueue: [
		  {
		  	animationName: 'craneOffScreen',
		  	animationSequence: animation.craneOffScreen,
		  	priority: 1
		  },
		  {
		  	animationName: 'craneIntoScreen',
		  	animationSequence: animation.craneIntoScreen,
		  	priority: 2
		  },
		  {
		  	animationName: 'frameIntoScreen',
		  	animationSequence: animation.frameIntoScreen,
		  	priority: 2
		  },
		  {
		  	animationName: 'craneClawLeftOpen',
		  	animationSequence: animation.craneClawLeftOpen,
		  	priority: 3  	
		  },
		  {
		  	animationName: 'craneClawRightOpen',
		  	animationSequence: animation.craneClawRightOpen,
		  	priority: 3  	
		  },		  
		  {
		  	animationName: 'frameFall',
		  	animationSequence: animation.frameFall,
		  	priority: 4
		  },
		  {
		  	animationName: 'dustClouds',
		  	animationSequence: animation.dustClouds,
		  	element: 'clouds',
		  	priority: 5,
		  	editState: [{key: 'disablePaintButton', value: false}, {key: 'disableDecalButton', value: false}, {key: 'disableRolloutButton', value: false}]
		  },
		  {
		  	animationName: 'craneClawLeftClose',
		  	animationSequence: animation.craneClawLeftClose,
		  	priority: 5  	
		  },
		  {
		  	animationName: 'craneClawRightClose',
		  	animationSequence: animation.craneClawRightClose,
		  	priority: 5  	
		  },
		  {
		  	animationName: 'craneReset',
		  	animationSequence: animation.craneReset,
		  	priority: 5
		  }
		  ]
		});		
	 }
	}

	mechanicWork = (fn) => { //Windows, Decals		
		if (!this.state.craneCurrentlyAnimating && !this.state.disablePaintButton && !this.state.disableDecalButton) {
			this.setState({
				animationQueue: [
				  {
				  	animationName: 'mechanicAlign1',
				  	animationSequence: animation.mechanicAlign1,
				  	priority: 1
				  },
				  {
				  	animationName: 'mechanicRaise',
				  	animationSequence: animation.mechanicRaise,
				  	priority: 2
				  },
				  {
				  	animationName: 'mechanicShake',
				  	animationSequence: animation.mechanicShake,
				  	function: fn,
				  	priority: 3				  	
				  },
				  {
				  	animationName: 'mechanicAlign2',
				  	animationSequence: animation.mechanicAlign2,
				  	priority: 4
				  },
				  {
				  	animationName: 'mechanicShake',
				  	animationSequence: animation.mechanicShake,
				  	priority: 5
				  },
				  {
				  	animationName: 'mechanicAlign3',
				  	animationSequence: animation.mechanicAlign3,
				  	priority: 6
				  },
				  {
				  	animationName: 'mechanicShake',
				  	animationSequence: animation.mechanicShake,
				  	priority: 7
				  },
				  {
				  	animationName: 'mechanicLower',
				  	animationSequence: animation.mechanicLower,
				  	priority: 8					
			  	  },
			  	  {
				  	animationName: 'mechanicReset',
				  	animationSequence: animation.mechanicReset,
				  	priority: 9	  	
				  }
				]
			});
		}
	}

	mechanicRemovePart() {
		if (!this.state.craneCurrentlyAnimating) {
		this.setState({	
			animationQueue: [
			  {
			  	animationName: 'mechanicAlign1',
			  	animationSequence: animation.mechanicAlign1,
			  	priority: 1
			  },
			  {
			  	animationName: 'mechanicRaise',
			  	animationSequence: animation.mechanicRaise,
			  	priority: 2
			  },
			  {
			  	animationName: 'mechanicShake',
			  	animationSequence: animation.mechanicShake,
			  	priority: 3
			  },		
			  {
			  	animationName: 'mechanicLower',
			  	animationSequence: animation.mechanicLower,
			  	priority: 4
			  },
			   {
			  	animationName: 'frameLower',
			  	animationSequence: animation.frameLower,
			  	priority: 4
			  },
			  {
			  	animationName: 'mechanicOffScreen',
			  	animationSequence: animation.mechanicOffScreen,
			  	priority: 5
			  },
			  {
			  	animationName: 'frameOffScreen',
			  	animationSequence: animation.frameOffScreen,
			  	priority: 5,
			  	toggleComponent: 'displayFrame'
			  },
			  {
			  	animationName: 'mechanicReset',
			  	animationSequence: animation.mechanicReset,
			  	priority: 6,
			  	newAnimationSequence: 'newFrame'			  	
			  }
			]			
		});
		}
	}

	rollOutVehicle() {
		if (!this.state.craneCurrentlyAnimating && !this.state.disableRolloutButton) {
		this.setState({	
		craneCurrentlyAnimating: true,
		disableGizmoButton: true,
		disableFrameButton: true,
		disablePaintButton: true,
		disableDecalButton: true,
		disableRolloutButton: true,
		animationQueue: [
		  {
		    animationName: 'lowerLift',
			animationSequence: animation.lowerLift,
			priority: 1		  	
	      },
	      {
		    animationName: 'lowerVehicle',
			animationSequence: animation.lowerVehicle,
			vehicleNumber: 'vehicleId' + this.state.currentVehicleId,
			priority: 1		  	
	      },
	      {
		    animationName: 'rollOutVehicle',
			animationSequence: animation.rollOutVehicle,
			vehicleNumber: 'vehicleId' + this.state.currentVehicleId,
			priority: 2,
			toggleComponent: 'displayVehicle'	  	
	      },
	      {
		    animationName: 'resetLift',
			animationSequence: animation.resetLift,
			priority: 3,
			editState: [{key: 'disableGizmoButton', value: false}]
	      },
		]
		});
	 }
	}
	
	// createMonster(monsterState, monsterProps) {		
	// 	this.setState({
	// 		monsterCount: this.state.monsterCount + 1,
	// 		monsterArray: [...this.state.monsterArray, 
	// 		  <Monster 
	// 		    key={this.state.monsterCount} 
	// 		    id={monsterProps.number}
	// 		    number={monsterProps.number}
	// 		    color = {monsterState.color}
	// 		    species={monsterState.species} 
	// 		    onRemove={this.removeComponent}
	// 		    oncreateFloatingMonster={this.createFloatingMonster}
	// 		  />
	// 		]
	// 	});
	// }

	// createFloatingMonster(monsterState, monsterProps) {
	// 	this.setState({
	// 		floatingMonsterCount: this.state.floatingMonsterCount + 1,
	// 		floatingMonsterArray: [...this.state.floatingMonsterArray, 
	// 		  <FloatingMonster 
	// 		    key={this.state.floatingMonsterCount} 
	// 		    id={'floating-monster-id-' + monsterProps.number}
	// 		    number={monsterProps.number}
	// 		    species={monsterProps.species} 
	// 		    color={monsterState.color}
	// 		  />
	// 		]
	// 	});
	// }

	//current animation's done
	currentAnimationFinished(animate) {

		this.setState({	
			animationQueue: this.state.animationQueue.filter(function(item) {
				return item !== animate
			}),
			currentAnimation: this.state.currentAnimation.filter(function(item) {
				return item !== animate
			}),
		});

		//Remove component
		if (animate.toggleComponent) {
			this.toggleComponent(animate.toggleComponent);
		}
		
		//Reset animation queue priority
		if (this.state.animationQueue.length === 0) {
			this.setState({
				animationQueuePriority: 0,
				craneCurrentlyAnimating: false
			});	  
		}

		//Follow with another animation
		if(animate.newAnimationSequence) {
			this[animate.newAnimationSequence]();			
		}

		//Follow with another function
		if(animate.function) {
			animate.function();			
		}

		//Set State
		if (animate.editState) {
		  animate.editState.forEach(function(states) {
		  	this.setState({
 		  	  [states.key] : states.value
 		    });
		  }, this);
		}
	}
	
	componentDidUpdate(prevProps, prevState) {
		//We have an updated animation queue
		if ((prevState.animationQueue !== this.state.animationQueue 
			&& this.state.animationQueue.length !== 0
			&& this.state.currentAnimation.length === 0
		)) {

			let animationPriority = this.state.animationQueuePriority;

			animationPriority++;

			let sendToCurrentAnimation = [];
			this.state.animationQueue.forEach(function(animation, index) { 
				if (animation.priority === animationPriority) {				
					sendToCurrentAnimation.push(animation);
				}				
			}, this);

			this.setState({
			  currentAnimation: sendToCurrentAnimation,	
			  animationQueuePriority: animationPriority  
			});
		}		

		//We have current animation(s)
		if (prevState.currentAnimation.length < this.state.currentAnimation.length && this.state.currentAnimation.length !== 0) {	
			this.state.currentAnimation.forEach(function(animate, index) {					
				animate.animationSequence(animate).then((resolve) => this.currentAnimationFinished(resolve));			
			}, this);
		}	
	}

	render() {

		let vehicle;
	
		if (this.state.displayVehicle) {
			vehicle = <Vehicle 
			  currentVehicleId={this.state.currentVehicleId} 
			  displayFrame={this.state.displayFrame} 
			  currentFrameType={this.state.currentFrameType} 
			  newVehicle={this.newVehicle} 
			  currentFrameOption={this.state.frameOptions[this.state.currentFrameOptionId]}
			/>
		}

		return (
		  <div className='gizmos-container' id='gizmoSectionAnchor'>
		  	<Crane />
			  <section className='gizmo-creater-container'>	
			  	{vehicle}
			  </section>
			<div id='gizmo-lift'>
				<div id="clouds">
				  <div className="cloud-left" />
				  <div className="cloud-center" />
				  <div className="cloud-right" />
				</div>
			</div>
			<section className='gizmo-mechanic-container'>
			<div id='gizmo-mechanic-outer'>
			  <div id='gizmo-mechanic-upper' />
			    <div className='gizmo-mechanic-tower' />
			    <div className='gizmo-mechanic-base'>
			    <div className='gizmo-mechanic-base-gear-container'>
 				  <div className='gizmo-mechanic-base-gear-left'>
				    <div className="center"></div>
				    <div className="tooth"></div>
				    <div className="tooth"></div>
				    <div className="tooth"></div>
				    <div className="tooth"></div>
				  </div>
				<div className='gizmo-mechanic-base-gear-right'>
				    <div className="center"></div>
				    <div className="tooth"></div>
				    <div className="tooth"></div>
				    <div className="tooth"></div>
				    <div className="tooth"></div>
				</div>
				</div>
			    </div>			    
			  </div>
			  <div className='gizmo-mechanic-track-container'>
			      <div className='gizmo-mechanic-track-upper'/>
			    </div>
			</section>			
            <section className='gizmo-converter-container'>
            <div className='gizmo-updates-container'>
			  		<ul id='gizmo-updates-screen' />			  		
				</div>
                          
            <GizmoControls 
              disableGizmoButton={this.state.disableGizmoButton}
			  disableFrameButton={this.state.disableFrameButton}
			  disablePaintButton={this.state.disablePaintButton}
			  disableDecalButton={this.state.disableDecalButton}
			  disableRolloutButton={this.state.disableRolloutButton}
			  bringInGizmo={() => this.bringInGizmo()}
			  newFrame={this.newFrame}
			  mechanicWork={() => this.mechanicWork(this.cycleFrameOption)}
			  rollOutVehicle={() => this.rollOutVehicle()}
             />
                                          
            </section>           
            <section className='gizmo-result-container'>
             {this.state.monsterArray}
             <div className='gizmo-result-track-container'>
               <div className='gizmo-result-track-upper' />
             </div>
            </section>
            <section className='floating-monster-container'>
            	{this.state.floatingMonsterArray}
            </section>
	      </div>
		)
	}
}
