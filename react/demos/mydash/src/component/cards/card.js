import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './card.css'

class Card extends Component {
  removeCard(_id) {
    var r = window.confirm("Do you really want to remove this card ?");
    if(r === true){
      this.props.removeCard(_id);
    }
  }
  render() {
    return (
      <li key={this.props.index} className="card">
      	<Link to ={"/card/"+this.props.index}>
      		<div className="cardBox">
      			<span>{this.props.card.title}</span>
      		</div>
      	</Link>	
        <div className="actions">
          <button onClick={this.removeCard.bind(this, this.props.card._id)}>Remove</button>
        </div>
      </li>
    );
  }
}

export default Card;
