import React from 'react';
import { Link } from 'react-router';


class About extends React.Component {
	constructor(){
		super();
		this.state = {
			toggleAbout: true
		}
	}

	toggleAboutPage() {
		this.setState({
			toggleAbout: !this.state.toggleAbout
		})
	}

	render() {

		//start styling
		let about = {
			position: 'fixed',
			right: '40px',
			top: '20px',
			zIndex: '2'
		}
		let wrapper = {
			position: 'fixed',
			top: '0',
			left: '0',
			right: '0',
			bottom: '0',
			background: '-webkit-linear-gradient(top, #e06471 0%,#ff7c7c 100%)',
			display: 'flex',
			height: '100vh',
			width: '100vw',
			zIndex: 2,
			justifyContent: 'center',
			alignItems: 'center'
		}
		let close = {
			position: 'fixed',
			top: '20px',
			right: '40px',
			zIndex: '3',
			color: 'white'
		}
		let content = {
			textAlign: 'center',
			color: 'white',
			padding: '20%'
		}
		//end styling


		//show about button
		if (this.state.toggleAbout == true) {
			return (
					<div style={about}>
							<h2 onClick={this.toggleAboutPage.bind(this)}>About</h2>
					</div>
			);

		//show about page	
		} else {
			return (
				<div style={wrapper}>
					<div style={content}>
						<h1>Our mission</h1>
						<h2>
							We want to lower the barrier for people to meet. 
							By using food as a central hub.
						</h2>
					</div>
					<h2 onClick={this.toggleAboutPage.bind(this)} style={close}>Close</h2>
				</div>
			);
		}
	}
}

export default About;