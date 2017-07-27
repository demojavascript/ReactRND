import React, { Component } from 'react';

var menuData = [
	{title:"Home", link:"#home"},
	{title:"About", link:"#about"},
	{title:"Contact", link:"#contact"},
	{title:"Services", link:"#services"}
]

class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar">
				<Menu sdata={menuData} />
			</div>
		)
	}
}

class Menu extends Component {
	render() {
		return(
			<div className="menu">
				<ul>
					{
						this.props.sdata.map(function(menu, key){
							return (<li key={key}><a href={menu.link}>{menu.title}</a></li>)
						})
					}
				</ul>
			</div>
		)
	}
}

export default Sidebar;