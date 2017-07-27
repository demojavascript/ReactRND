class List extends React.Component {
	render(){
		return (
				<li>1</li>
			)
	}
}
class Welcome extends React.Component {
  render() {
    return (
    	<div>
    	<h1>Hello, {this.props.name}</h1>
    	<List/>
    	</div>
    );
  }
}
ReactDOM.render(
  <Welcome name="Sara" />,
  document.getElementById('root')
);

