import React from 'react';
import {NavLink} from 'react-router-dom';
import Auth from '../.././logic/Auth'

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {user:null};
  }
  onLogout(){
    this.props.onlogout();
  }
  componentDidMount() {
		this.setState({user:Auth.getUser()});
	}
	render(){
    var _content = (
      <ul>
        <li><NavLink  to="/admin">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/admin/post">Post</NavLink></li>
      </ul>
    )
    if(this.state.user != null && this.state.user.role != undefined && this.state.user.role == 1){
      _content = (
        <ul>
          <li><NavLink  to="/admin">Home</NavLink></li>
          <li><NavLink activeClassName="active" to="/admin/category">Category</NavLink></li>
          <li><NavLink activeClassName="active" to="/admin/post">Post</NavLink></li>
          <li><NavLink activeClassName="active" to="/admin/users">Users</NavLink></li>
        </ul>
      )
    }
		return (
			<section>
				<nav>
					{_content}
          <ul className="pull-right">
            <li><button onClick={this.onLogout.bind(this)}>Logout</button></li>
					</ul>
				</nav>
			</section>
		);
	}
}
export default Nav;
