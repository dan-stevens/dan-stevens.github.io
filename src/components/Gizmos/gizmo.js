import React from 'react';
import updateMonitor from './monitor';

export class Gizmo extends React.Component {  

  componentDidMount() {
    updateMonitor('Gizmo componentDidMount called');
  }

  render() {

	return (    
	  <div className='gizmo' id={'gizmoId'} ref={this.monsterDOMRef}>
      <div className='wheel' />
      <div className='wheel' />
    </div>
    )
  }
}