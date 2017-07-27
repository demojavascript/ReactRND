import React, { Component } from 'react';
import SearchBox from './SearchBox.jsx';
import Trows from './Trows.jsx';
import Utility from '.././utils/Utility.js';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {users:this.props.data, sortcol:'',sortstatus:true, searchtxt:''};
  }
  onchange(stxt) {
    this.setState({searchtxt:stxt});
  }
  sortTable(colname) {
    var sortstat = this.state.sortstatus;
    if(this.state.sortcol === colname){
      sortstat = !this.state.sortstatus;
    }else{
      sortstat = true;
    }
    var oldusers = this.state.users;
    oldusers.sort(Utility.compareValues(colname, sortstat));
    this.setState({users:oldusers, sortcol:colname,sortstatus:sortstat}); 
  }
  render() {
    return (
      <div className="tableBox">
        <SearchBox onchange={this.onchange.bind(this)} />
        <table>
          <thead>
            <tr>
              <td onClick={this.sortTable.bind(this, "name")}>Name</td>
              <td onClick={this.sortTable.bind(this, "age")}>Age</td>
              <td onClick={this.sortTable.bind(this, "rollno")}>RollNo</td>
              <td onClick={this.sortTable.bind(this, "marks")}>Marks</td>
            </tr>
          </thead>
          <Trows stext={this.state.searchtxt} rowdata={this.state.users} />
        </table>
      </div>
    )
  }
}


export default Table;