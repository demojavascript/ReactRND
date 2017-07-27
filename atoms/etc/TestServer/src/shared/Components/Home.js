import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Nav from '../sharedComponents/./Nav.js'
import ListPost from './subComponents/ListPost'

class Home extends React.Component {
	render(){
		return (
			<div>
				<Nav/>
				<ListPost/>
				{this.props.children}
			</div>
		);
	}
}
export default Home;
