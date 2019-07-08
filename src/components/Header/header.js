import React from 'react';
import { Box } from './Box/box';
import { BoxTwo } from './BoxTwo/boxTwo'; 

export class Header extends React.Component {
	render() {
		return (
			<div>
				<div className="header">
		        	<Box />
		        </div>
		        <div className="better--header">
		        	<BoxTwo />
		        </div>
	        </div>
         );
	}
}