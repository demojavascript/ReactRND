import React from 'react';
import {Link, Route} from 'react-router-dom';
import Api from '../../.././apimanager/api';

class Users extends React.Component {
	constructor(props){
		super(props);
    this.state = {users:null, error:"", isLoading:true};
	}
  componentDidMount() {
    var self = this;
		Api.getUsers(function(data){ console.log(data);
      if(data.status == 0){
        self.setState({error:data.msg});
      }else{
        if(data.data != null && data.data.length > 0){
          self.setState({users:data.data});
        }else{
          self.setState({error:data.msg});
        }
			  self.setState({isLoading:false});
      }
		});
	}
	render(){
    var _content = "";
    const loading = (
			<div className="form">
				<p>---loading----</p>
			</div>
		)
    var _info = (
			<div className="row">
				<div className="info">{this.state.error}</div>
			</div>
		);
    if(this.state.users){
			_content = (
				<div className="row">
					<table className="table">
						<thead>
							<tr>
								<td>S.No</td>
								<td>Name</td>
								<td>Email</td>
								<td>Action</td>
							</tr>
						</thead>
						<tbody>
							{
								this.state.users.map(function(user, key){
									return (<tr key={key}><td>{key}</td><td>{user.name}</td><td>{user.email}</td><td></td></tr>)
								})
							}
						</tbody>
					</table>
				</div>
			);
		}
		return (
			<div>
				<h1>Users</h1>
        {this.state.isLoading? loading:""}
        {this.state.error? _info:""}
        {this.state.users? _content:""}
			</div>
		);
	}
}
export default Users;
