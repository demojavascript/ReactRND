import React, { Component } from 'react';
import Row from './Row.jsx';
import Utility from '.././utils/Utility.js';

class Trows extends Component {
  constructor(props) {
    super(props);
    this.state = {rowsdata:this.props.rowdata};
  }
  render() {
    var self = this;
    return (
      <tbody>
        {
          this.state.rowsdata.map(function(user, key){
            if(self.props.stext.trim().length > 0){
              if(Utility.finddata(user.name, self.props.stext) > -1){
                return (<Row key={key} keyy={key} user={user} />)
              }
            }else{
              return (<Row key={key} keyy={key} user={user} />)
            }
          })
        }
      </tbody>
    )
  }
}

export default Trows;