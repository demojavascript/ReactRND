import React, { Component } from 'react';
class Users extends Component {
  constructor(props){
      super(props);
      this.state = {udata: this.props.userdata}
  }
  handleClick(user){
    var kdata = this.state.udata.filter(function(i) {
      return i !== user;
    });
    this.setState({udata: kdata});
  }
  render() {
    var _this = this;
    return(
      <div>
      <table>
      	<thead><tr><td>S.No</td><td>Name</td><td>Marks</td></tr></thead>
      	<tbody>
      		{
            this.state.udata.map(function(user, key){
              return <Child deleteit={_this.handleClick.bind(_this, user)} userr = {user} name={user.name} marks = {user.marks} key={key} keyy={key} />
            })
      		}
      	</tbody>
      </table>
      </div>
    )
  }
}

class Child extends Component {
  handleClick(){
    this.props.deleteit()
  }
  render() {
    return (
      <tr id={this.props.keyy}><td>{this.props.keyy}</td><td>{this.props.name}</td><td>{this.props.marks}<button onClick={this.handleClick.bind(this)}>delete it</button></td></tr>
    )
  }
}

export default Users;