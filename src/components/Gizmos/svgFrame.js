import React from 'react';

export class SVGFrame extends React.Component {

	constructor(props) {
		super(props);
	}

	getFrameType(frameType) {
	  switch(frameType) {
		  	case 'ice-cream-truck':
		  	return (
			    <g id="Layer_2" data-name="Layer 2"><g id="Ice_Cream_Truck" data-name="Ice Cream Truck"><polygon points="116.44 55.59 116.44 61.34 131.94 61.34 131.94 55.84 116.44 55.59" fill="#fff" stroke="#673d6d" stroke-miterlimit="10" stroke-width="2"/><path d="M126.89,23.63,61.51,52A1.57,1.57,0,0,0,62,55l75.94,1.33Z" fill="#fff" stroke="#673d6d" stroke-miterlimit="10" stroke-width="4"/><path id="body" d="M17.94,60.84s-8,3.07-12,9.07-3,79.93-3,83.93c0,9.6,7,33,7,33s19,11,26,9c-2-9.2-1-11.67-1-15,0-10,6-19,20-19,7.59,0,13.81.73,19,5,6.58,5.41,5,31,18,31h73c-.38-2.88.55-9.21,1-14,.52-5.7.86-8.63,5-14,4-5.2,9.6-7.78,14-8,3.93-.21,10.52.68,14,3,8.69,5.78,11.16,14.75,12,17,2.34,6.3,9.54,16,14,16h53c9.71,0,15-12,15-19v-36a14.16,14.16,0,0,0-3-6c-6.74-7.51-22-17-22-17s-29.25-58.76-35-59C231,60.76,17.94,60.84,17.94,60.84Z" fill="#fff" stroke="#673d6d" stroke-miterlimit="10" stroke-width="4"/><path d="M204.36,123.39l-2.42,1.45c-.91,1-1.14,3.43-1,5l13,10,5-2h69s2.69-.57,1.18-2.21" fill="none" stroke="#673d6d" stroke-miterlimit="10" stroke-width="2"/><path d="M154.75,189.84H129a1.47,1.47,0,0,1-1.39-1l-1.67-7v-102a2.65,2.65,0,0,1,3-3h33c2.93,0,3,1,3,3v83.65a2,2,0,0,1-.12.68C163.89,166.66,157.94,189.84,154.75,189.84Z" fill="none" stroke="#673d6d" stroke-miterlimit="10" stroke-width="2"/><path d="M219.94,141.84a1,1,0,0,0-1,1v11a1,1,0,0,0,1,1h21a1,1,0,0,0,1-1v-11c0-.93.22-1-1-1Z" fill="#aae1e2" stroke="#673d6d" stroke-miterlimit="10" stroke-width="2"/><path d="M286.94,141.84s.8-.37,1,1v11a1,1,0,0,1-1,1h-18s-1,.45-1-1v-11a.91.91,0,0,1,1-1Z" fill="#aae1e2" stroke="#673d6d" stroke-miterlimit="10" stroke-width="2"/><path d="M220.94,164.84a1,1,0,0,1-1-1v-3a1,1,0,0,1,1-1h20a1,1,0,0,1,1,1c0,1.3,0,4.86,0,3a1,1,0,0,1-1,1Z" fill="#fbb03b" stroke="#673d6d" stroke-miterlimit="10" stroke-width="2"/><path d="M268.94,164.84a1,1,0,0,1-1-1v-3a1,1,0,0,1,1-1h18a1,1,0,0,1,1,1v3a1,1,0,0,1-1,1Z" fill="#fbb03b" stroke="#673d6d" stroke-miterlimit="10" stroke-width="2"/><path d="M168.94,90.84v28s1.29,4,4,4h17s2.89.46,1.64-4.36-7.5-29.39-7.5-29.39a5.44,5.44,0,0,0-4.14-3.25c-1.57-.2-5.35-.06-8,0C169.44,85.88,168.79,88,168.94,90.84Z" fill="#e6e6e6" stroke="#673d6d" stroke-miterlimit="10" stroke-width="2"/><path d="M132.11,89.4v29.73s-1,3.56,1.72,3.56h22.33s2.57,1.19,2.71-3.34c.15-5.16,0-29.83,0-29.83s.32-3.68-2.71-3.68H134.69S132.11,85.84,132.11,89.4Z" fill="#e6e6e6" stroke="#673d6d" stroke-miterlimit="10" stroke-width="2"/><path d="M291.94,188.84h-69a4,4,0,0,1-4-4v-9a4,4,0,0,1,4-4l68.9,0a4,4,0,0,1,4,4l.07,9A4,4,0,0,1,291.94,188.84Z" fill="#fff" stroke="#673d6d" stroke-miterlimit="10" stroke-width="4"/><rect x="2" y="171.82" width="8.37" height="16.79" rx="4.03" fill="#fff" stroke="#673d6d" stroke-miterlimit="10" stroke-width="4"/><path d="M118.94,85.84v38a6.22,6.22,0,0,1-6,6h-86c-2.57,0-4-2.44-4-5v-27m79,0s0,7-5,7-5-7-5-7m20,0s0,7-5,7-5-7-5-7m-20,0s0,7-5,7-5-7-5-7m20,0s0,7-5,7-5-7-5-7m-20,.25s0,7-5,7-5-7-5-7m20,0s0,7-5,7-5-7-5-7m-10,0s0,7-5,7-5-7-5-7m-10,0s0,7-5,7-5-7-5-7m20,0s0,7-5,7-5-7-5-7m-10,0s0,7-5,7-5-7-5-7m106.64-.23h-7.56m-1,0h-9.12l-89,0,8-12h98Zm8.88,0v-12m-9,0-8,12m-2-12-8,12m-2-12-8,12m-2-12-8,12m-2-12-8,12m-2-12-8,12m-2-12-8,12m-2-12-8,12m-2-12-8,12" fill="#fff" stroke="#673d6d" stroke-miterlimit="10" stroke-width="2"/><path d="M194.94,115.84s2.49,7,8,7h60s5-1,2.75-5.11c-3-5.53-11.24-22.8-13.7-28a5.24,5.24,0,0,0-2.06-2.31c-1.38-.79-5.56-1.51-7-1.6-2.95-.2-51,0-51,0,.83,0-3.45-.37-3,5Z" fill="#f2f2f2" stroke="#673d6d" stroke-miterlimit="10" stroke-width="2"/><line x1="191.27" y1="87.1" x2="207.94" y2="121.84" fill="#fff" stroke="#fff" stroke-miterlimit="10"/><polygon points="197.94 86.83 215.94 121.83 219.94 121.83 201.6 86.83 197.94 86.83" fill="#fff"/><line x1="195.35" y1="87.34" x2="211.02" y2="121.08" fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width="2"/><path d="M171.94,13.84s-10.5-24.5-32-3c0,0-17-1-12,17,0,0-20,19,8,27,0,0-5,8.66,13,9,0,0,12,3,17-5" fill="#fff" stroke="#673d6d" stroke-miterlimit="10" stroke-width="4"/><path d="M143.64,49.75s6.71,8.94,22.32,8.13a25.67,25.67,0,0,0,16.42-10.44A24.64,24.64,0,0,0,177.6,13.8a25.56,25.56,0,0,0-16.5-5.53c-.67,0-1.36.06-2,.13s-1.37.16-2.06.29a25.66,25.66,0,0,0-16.43,10.43" fill="#fff" stroke="#673d6d" stroke-miterlimit="10" stroke-width="4"/></g></g>
			)
			 
			case 'fire-truck':
			return (
			    <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path id="outline" d="M17.1,3s-8,3.07-12,9.07S2.1,92,2.1,96c0,9.6,1,42,1,42h44c-2-9.2-1-11.67-1-15,0-10,6-19,20-19,7.6,0,9.81.73,15,5,6.58,5.41,5,31,18,31h65c-.38-2.87.55-9.21,1-14,.53-5.7.86-8.63,5-14,4-5.2,9.6-7.78,14-8,3.93-.21,10.52.68,14,3,8.69,5.78,11.16,14.75,12,17,2.35,6.3,9.55,16,14,16h53c9.71,0,15-12,15-19V56s-19-37-23-47c-.19-.47-28.55.31-62,.24-3.5,0-7.06-6.19-10.65-6.47-15.74-1.25-32-.56-46.69-.53-3.08,0,1.47,51.75-1.66,51.76-4.74,0-1.19,0-6,0-7,0,1-51.66-6-51.63C77,2.58,17.1,3,17.1,3Z" fill="none" stroke="#673d6d" stroke-miterlimit="10" stroke-width="4"/><path d="M217.1,43s2.49,7,8,7h60s5-1,2.75-5.11c-3-5.53-11.24-22.8-13.7-28a5.24,5.24,0,0,0-2.06-2.31,13.43,13.43,0,0,0-5-1.6c-2.94-.2-51,0-51,0,.83,0-5.45-.37-5,5Z" fill="#fff" stroke="#673d6d" stroke-miterlimit="10" stroke-width="2"/><path d="M177.74,100H156.61a1.18,1.18,0,0,1-1.13-.84l-1.38-5.75V9.45A2.18,2.18,0,0,1,156.56,7h27.08c2.41,0,2.46.82,2.46,2.47V78.29a1.54,1.54,0,0,1-.1.56C185.24,80.91,180.36,100,177.74,100Z" fill="none" stroke="#673d6d" stroke-miterlimit="10" stroke-width="2"/><path d="M219.1,84a1,1,0,0,0-1,1V96a1,1,0,0,0,1,1h21a1,1,0,0,0,1-1V85c0-.93.22-1-1-1Z" fill="none" stroke="#673d6d" stroke-miterlimit="10" stroke-width="2"/><path d="M286.1,84s.8-.36,1,1V96a1,1,0,0,1-1,1h-18s-1,.45-1-1c0-1.16,0-11,0-11a.91.91,0,0,1,1-1Z" fill="none" stroke="#673d6d" stroke-miterlimit="10" stroke-width="2"/><path d="M220.1,107a1,1,0,0,1-1-1v-3a1,1,0,0,1,1-1h20a1,1,0,0,1,1,1c0,1.3,0,4.86,0,3a1,1,0,0,1-1,1Z" fill="#fff" stroke="#673d6d" stroke-miterlimit="10" stroke-width="2"/><path d="M268.1,107a1,1,0,0,1-1-1v-3a1,1,0,0,1,1-1h18a1,1,0,0,1,1,1v3a1,1,0,0,1-1,1Z" fill="#fff" stroke="#673d6d" stroke-miterlimit="10" stroke-width="2"/><path d="M191.1,19V47s1.29,4,4,4h17s2.9.46,1.65-4.36-7.51-29.39-7.51-29.39A5.42,5.42,0,0,0,202.1,14c-1.57-.2-5.35-.06-8,0C191.6,14,191,16.09,191.1,19Z" fill="#fff" stroke="#673d6d" stroke-miterlimit="10" stroke-width="2"/><path d="M157.38,16V36.61s-.95,2.46,1.64,2.46h21.34s2.46.83,2.58-2.31c.15-3.57,0-20.65,0-20.65a2.28,2.28,0,0,0-2.58-2.55H159.84A2.41,2.41,0,0,0,157.38,16Z" fill="#fff" stroke="#673d6d" stroke-miterlimit="10" stroke-width="2"/><path d="M291.1,131h-69a4,4,0,0,1-4-4v-9a4,4,0,0,1,4-4l68.9,0a4,4,0,0,1,4,4l.06,9A4,4,0,0,1,291.1,131Z" fill="#fff" stroke="#673d6d" stroke-miterlimit="10" stroke-width="4"/></g></g>
			)				
      }
	}

	componentWillUpdate() {

	}

	render() {
		return(
				<svg
				    className={this.props.frameOption}
				    id='frame'
				    xmlns="http://www.w3.org/2000/svg"
				    viewBox="0 0 297.94 199.84"
				    xmlnsXlink="http://www.w3.org/1999/xlink">
					{this.getFrameType(this.props.frameType)}
				</svg>
		)
	}
}

