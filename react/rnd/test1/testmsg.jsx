class MyMsg extends React.Component {
	
	render(){
		return(
			<div>
				<ul>{
						this.props.allmsg.map(function(msg, index){
							return <li>{msg} - {index+1}</li>
						})
					}
				</ul>
			</div>
		)
	}
}
const msgs = [1,2,3,4,5]
ReactDOM.render(
  <MyMsg allmsg = {msgs} />,
  document.getElementById('root')
);