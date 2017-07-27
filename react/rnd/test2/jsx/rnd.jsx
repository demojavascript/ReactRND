const Data = {
	"name":"Aman Singh",
	"games":["Cricket","Hockey", "Tennis"]
}
class App extends React.Component {
	render(){
		return(
			<div>
				<Profile name={this.props.profileData.name} />
				<Games games={this.props.profileData.games} />
			</div>
		)
	}
}
class Profile extends React.Component {
	render(){
		return(
			<div>
				<h1>{this.props.name}</h1>
			</div>
		)
	}
}
class Games extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {data: []};
	}
	render(){
		if(this.state.data.length < 1) {
			return <Loading />
		}
		return(
			<div>
				<h2>Games</h2>
				<ul>
					{
						this.state.data.map(function(obj, key){
							return (<li>{obj.trackName}</li>)
						})
					}
				</ul>
			</div>
		)
	}
	componentDidMount(){
	   this.getData('https://itunes.apple.com/search?term=fun');
	}
	getData(urll){
		$.ajax({
	      url: urll,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({data: data.results}); // Notice this
	        console.log(data)
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(status, err.toString());
	      }.bind(this)
	    });
	}
}
class Loading extends React.Component {
	render() {
		return (
			<div>Loading</div>
		)
	}
}
ReactDOM.render(
  <App profileData = {Data} />,
  document.getElementById('root')
);