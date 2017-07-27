import React, { Component } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {welcomeUpdated} from '.././Actions/Welcome'
require('.././Resources/css/base.scss');

class Dash extends Component {
  componentDidMount(){
    this.props.updateWlcm("sjkfas fjasdfa sfjkasdf asjkdf asd");
  }
  render() {
    return (
      <div>
        <h1>Dash....909{this.props.wlcm.welcomeTxt}</h1>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    wlcm:state.welcome
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({updateWlcm:welcomeUpdated}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Dash);
