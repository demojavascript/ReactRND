import { render } from 'react-dom';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userLogin} from '.././Actions/User';


class Dashboard extends React.Component {
  render(){
    console.log(this.props.User);
    return(
        <section className="dashboard">
          Dashboard
        </section>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({loginHandler:userLogin}, dispatch)
}

function mapStateToProps(state){
  return{
    User:state.User
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
