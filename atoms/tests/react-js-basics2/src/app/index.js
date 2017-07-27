import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Root from './Root'
import Home from './Home'
import Notfound from './Notfound';
import User from './user/Userroute';
import {Redirect} from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props}/>
  )}/>
)
const isAuth = false;
const PrivateRoute2 = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
     isAuth ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class App extends React.Component {
	render(){
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Root} />
					<PrivateRoute2 path="/user" component={User} />
					<PrivateRoute component={Notfound} />

				</Switch>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));