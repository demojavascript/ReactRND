import React from 'react';
import {Link} from 'react-router-dom';
import Api from '../.././apimanager/api';

class ListPost extends React.Component {
  constructor(props){
    super(props);
    this.state = {posts:[], error:"", isLoading:true}
  }
  componentDidMount() {
    var self = this;
		Api.getPosts(function(data){
      if(data.status == 0){
        self.setState({error:data.msg});
      }else{
        if(data.data != null && data.data.length > 0){
          self.setState({posts:data.data});
        }else{
          self.setState({error:data.msg});
        }
			  self.setState({isLoading:false});
      }
		});
	}
	render(){
    const self = this;

    const _posts = (
      <ul>
        {
          self.state.posts.map(function(post, key){
            return (<li key={key}><Link to={"post/"+post.slug}>{post.title}</Link></li>);
          })
        }
      </ul>
    )
    const _loader = (
			<div className="row">
				<div className="info">Loading</div>
			</div>
		);

		return (
			<section className="content postlist" >
        {this.state.posts? _posts:_loader}
			</section>
		);
	}
}
export default ListPost;
