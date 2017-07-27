class View extends React.Component {
	constructor(props){
		super(props);
		this.prop = props;
		this.handleClick = this.handleClick.bind(this);
	}
    handleClick(event){
    	//console.log(this.prop.id);
    	console.log(this);
    }
	render(){
		return (
			<button id={this.prop.id} onClick={this.handleClick}>View</button>
		)
	}
}
class List extends React.Component {
	constructor(props){
		super(props)
		this.prop = props
	}
	render(){
	  const countr = this.prop.countries;
	  const listItems = countr.map((country) =>
	    <li><div>{country.name}<View id={country.name} /></div></li>
	  );
	  return (
	    <ul>{listItems}</ul>
	  );
	}
}
const country = [{name:"India", capital:"New Delhi"}, {name:"Bangladesh", capital:"Dhaka"}];
ReactDOM.render(
  <List countries={country} />,
  document.getElementById('root')
);