import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import Root from './Root'
import Home from './Home'
import List from './List'
import Users from './Users'
import User from './User'

class App extends React.Component {
	render(){
		return (
			<Router history={browserHistory}>
				<Route path="/" component={Root}>
					<IndexRoute component={Home} />
					<Route path={"home"} component={Home} />
					<Route path={"users"} component={Users} />
					<Route path={"list"} component={List} />
					<Route path={"user/:id"} component={User} />
				</Route>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));