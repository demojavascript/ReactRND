import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Nav from '../sharedComponents/./Nav.js'

class About extends React.Component {
	render(){
		return (
			<div>
				<Nav/>
				<h1>About</h1>
			</div>
		);
	}
}
export default About;
