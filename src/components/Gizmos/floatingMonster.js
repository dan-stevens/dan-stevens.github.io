import React from 'react';


export class FloatingMonster extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			floating: false,
			color: this.props.color
		}
		this.boo = this.boo.bind(this);
		this.floatingMonsterRef = React.createRef();
	}


boo(floatingMonster) {
	console.log('boo' + floatingMonster);
  let viewport = ['top', 'right', 'bottom', 'left'];
  let side = viewport[Math.floor(Math.random() * viewport.length)];
  console.log(side);

  //Pick a location on that side
  let sideLocation = Math.random() * 100 + '%';
  console.log(sideLocation);
  
  //Animate it
  console.log(floatingMonster);
  switch(side) {
	case 'top': 
	window.setTimeout( function() {
      floatingMonster.style['left'] = sideLocation;
	  floatingMonster.className += ' floating-monster-top';
	  }, 50);
	break;

	case 'right':
	window.setTimeout( function() {
      floatingMonster.style['top'] = sideLocation;
	  floatingMonster.className += ' floating-monster-right';  
	  }, 50);
	break;

	case 'bottom':
	window.setTimeout( function() {
	  floatingMonster.style['left'] = sideLocation;
      floatingMonster.className += ' floating-monster-bottom';
      }, 50);
	break;

	case 'left':
	window.setTimeout( function() {
	  floatingMonster.style['top'] = sideLocation;
      floatingMonster.className += ' floating-monster-left';
      }, 50);
	break;
	default:
	return
  }
  this.setState({
    floating: true
  });
}

componentDidMount() {
	// this.setState({
	// 	floating: true
	// })
	this.floatingMonsterRef.current.addEventListener('animationend', () => {animationEnd(this.floatingMonsterRef.current)});
	this.boo(this.floatingMonsterRef.current);
}

componentDidUpdate() {
  // console.log('update');

  // let floatingMonster = this.floatingMonsterRef.current;

  // floatingMonster.addEventListener('animationend', () => {animationEnd});

  //this.floatingMonsterRef.current.addEventListener('animationend', function() { animationEnd(that)}); //this.animationEnd(this.floatingMonsterRef.current)
	
(function loop() {
	    var rand = Math.round(Math.random() * (3000 - 500)) + 5000;
	    let floatingMonsterTimer = setTimeout((() => {
	    	console.log('timout up');
		    this.boo(this.floatingMonsterRef.current)//Need to send this floating monster
		}), rand);
	}.bind(this)());
}

render() {
		return (
			<div id={this.props.id} className={`floating-monster ${this.props.species}`} ref={this.floatingMonsterRef} style={{backgroundColor: this.state.color}}>
				<div className='head' />
				<div className='torso' />
				<div className='left-arm' />
				<div className='right-arm' />
			</div>
				)
  }

}


const animationEnd = floatingMonster => {
	console.log('here');
  floatingMonster.className = 'floating-monster';
  floatingMonster.style.removeProperty('top');
  floatingMonster.style.removeProperty('right');
  floatingMonster.style.removeProperty('bottom');
  floatingMonster.style.removeProperty('left');
}
