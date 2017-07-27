import React, { Component } from 'react';
import Sidebar from './sidebar.js';
import Article from './article.js';

class Content extends Component {
	render() {
		return (
			<div className="container">
				{<Sidebar />}
				{<Article />}
			</div>
		)
	}
}

export default Content;