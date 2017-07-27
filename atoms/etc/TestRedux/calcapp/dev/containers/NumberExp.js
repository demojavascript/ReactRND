import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {numberIncreased, numberDecreased} from '.././actions/Number'

class NumberExp extends Component {
  onNumInc(){
    this.props.numInc(1);
  }
  onNumDec(){
    this.props.numDec(1);
  }
  render(){
		var self = this;
		return(
			<div>
				<h1>{this.props.Calc.number}</h1>
        <button onClick={this.onNumInc.bind(this)}>Inc</button>
        <button onClick={this.onNumDec.bind(this)}>Dec</button>
      </div>
		)
	}
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({numInc: numberIncreased, numDec: numberDecreased}, dispatch);
}


function mapStateToProps(state) {
    return {
        Calc: state.Calc
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(NumberExp);
