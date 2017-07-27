class State extends React.Component {
	constructor(props){
		super(props);
		this.state = {name: "kjfghsdf asdfa"}
	}
	componentDidMount() {
		console.log("componentDidMount...");
	}

	componentWillUnmount() {
		console.log("componentWillUnmount...");
	}	
	render(){
		return (
			<div>
				<h1>Hello - {this.state.name}</h1>
			</div>
		)
	}	
}
ReactDOM.render(
  <State />,
  document.getElementById('root')
);