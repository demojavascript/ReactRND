import React from 'react';
import {Link} from 'react-router-dom';

class Notfound extends React.Component {
	render(){
		return (
			<div>
				<h4>Page Not Found!</h4>
				<p>Go TO <Link to="/">Home</Link></p>
			</div>
		);
	}
}
export default Notfound;