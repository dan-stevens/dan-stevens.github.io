import React from 'react';
import './header.css';

export class HeaderSection extends React.Component {

	render() {

		return(
			<section className='header-container'>
				<nav className='navigation-container'>
					<ul>
						<li className='disabled-nav'>About Me</li>
						<li className='disabled-nav'>Work</li>
						<li className='home'>DS</li>					
						<li className='disabled-nav'>Reach Out</li>
						<li onClick={() => scrollToSection('gizmoSectionAnchor')}>Build a Truck!</li>
					</ul>
				</nav>
				<div className='header-bio'>
				</div>
				<div className='header-greeting'>
				<h1>Hello!</h1>	
				<p>My Name is Dan Stevens and I'm a front end web developer. This is my portfolio / playground where I stay up to date in my freetime using the technologies and frameworks I enjoy like Javascript, React, HTML5 and CSS.</p>
				<p>While you're here take look around and if you'd like, drop me a line. I'm always interested in hearing about new ideas and projects.</p>
				<p><b>Thanks for stopping by!</b></p>
				</div>
					<ul className="social-container">
						<li><a href='https://www.linkedin.com/in/daniel-stevens-6a4b453a' target='_blank'><i className="fab fa-linkedin-in"></i></a></li>
						<li><a href='https://www.codecademy.com/profiles/DannyStevens' target='_blank'><i className="fas fa-code"></i></a></li>
						<li><a href='https://github.com/dan-stevens/dan-stevens.github.io' target='_blank'><i className="fab fa-github"></i></a></li>
						<li><a href='../../documents/DanStevens.pdf' target='_blank'><i className="far fa-file-code"></i></a></li>
					</ul>
				<div className='scroll-down-container'>
					<i className='fas fa-arrow-down' onClick={() => scrollToSection('gizmoSectionAnchor')}></i>
				</div>							  
			</section>
		)
	}
}

const scrollToSection = (element) => {
	let scrollTo = document.getElementById(element);
	scrollTo.scrollIntoView({behavior: 'smooth'});
} 	