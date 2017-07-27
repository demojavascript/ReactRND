import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Nav from './Nav.js'

class Home extends React.Component {
	render(){
		return (
			<div>
				<Nav/>
				<p>Page Not Found</p>
			</div>
		);
	}
}
export default Home;
