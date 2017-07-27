import React, { Component } from 'react';

class SearchBox extends Component {
  onchange(event){
    this.props.onchange(event.target.value);
  }
  render() {
    return (
      <div className="searchBox">
        <input className="search" type="text" onKeyUp={this.onchange.bind(this)} />
      </div>
    )
  }
}

export default SearchBox;