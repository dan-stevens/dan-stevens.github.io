import React from 'react';

export class Monster extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			color: this.props.color
		}
		this.monsterRef = React.createRef();
		this.boo = this.boo.bind(this);
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

animationEnd(monster) {
  console.log('here man');
  monster.className = 'floating-monster';
  monster.style.removeProperty('top');
  monster.style.removeProperty('right');
  monster.style.removeProperty('bottom');
  monster.style.removeProperty('left');
  this.boo(monster);
}

componentDidMount() {
	setTimeout(function() {
		this.monsterRef.current.classList.add('monster-move');
	}.bind(this), 50);  
  this.monsterRef.current.addEventListener('animationend', () => {this.animationEnd(this.monsterRef.current)});
}

componentDidUpdate() {
(function loop() {
	    var rand = Math.round(Math.random() * (3000 - 500)) + 5000;
	    let floatingMonsterTimer = setTimeout((() => {
	    	console.log('timout up');
		    this.boo(this.monsterRef.current)//Need to send this floating monster
		}), rand);
	}.bind(this)());
}

componentWillUnmount() {
	console.log('made it here');
	
}

	

	render() {
		return (
			<div ref={this.monsterRef} className={`monster ${this.props.species}`} style={{backgroundColor: this.state.color}}>
				<div className='head' />
				<div className='torso' />
				<div className='left-arm' />
				<div className='right-arm' />
				<div className='left-leg' />
				<div className='right-leg' />
			</div>
		)
	}

}

