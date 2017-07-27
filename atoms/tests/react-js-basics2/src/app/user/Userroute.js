import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

import Cart from './Cart'
import Orders from './Orders'
import Profile from './Profile'
import Settings from './Settings'
import Wishlist from './Wishlist'
import Nav from '.././Nav'

class Userroute extends React.Component {
	render(){
		console.log(this.props);
		return (
			<div>
				<Nav/>
				<h1>User</h1>
				<ul>
					<li><Link to="/user">User</Link></li>
					<li><Link to="/user/profile">Profile</Link></li>
					<li><Link to="/user/orders">Orders</Link></li>
					<li><Link to="/user/settings">Settings</Link></li>
					<li><Link to="/user/wishlist">Wishlist</Link></li>
					<li><Link to="/user/cart">Cart</Link></li>
				</ul>
			    <div>
			    	<Route path={`${this.props.match.url}/profile`} component={Profile} />
				    <Route path={`${this.props.match.url}/orders`} component={Orders} />
				    <Route path={`${this.props.match.url}/settings`} component={Settings} />
				    <Route path={`${this.props.match.url}/wishlist`} component={Wishlist} />
				    <Route path={`${this.props.match.url}/cart`} component={Cart} />
			    </div>
			</div>
		);
	}
}
export default Userroute;