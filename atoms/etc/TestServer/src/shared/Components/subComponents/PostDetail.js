import React from 'react';
import {Link} from 'react-router-dom';
import Api from '../.././apimanager/api';
import Nav from '../.././sharedComponents/nav';
import DateFormat from '../../../server/Utils/DateFormat';

class PostDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {post:"", error:"", isLoading:true}
  }
  componentDidMount() {
    var self = this;
		Api.getPost(this.props.match.params.post, function(data){ console.log(data);
      if(data.status == 0){
        self.setState({error:data.msg});
      }else{
        if(data.data != null ){
          self.setState({post:data.data});
        }else{
          self.setState({error:data.msg});
        }
			  self.setState({isLoading:false});
      }
		});
	}
	render(){
    const self = this;
    const _post = (
      <div className="postdetail">
        <h1>{self.state.post.title}<span className="pull-right dull">{DateFormat(self.state.post.created_at)}</span></h1>
        <div>{self.state.post.desc}</div>
      </div>
    )
    const _loader = (
			<div className="row">
				<div className="info">Loading</div>
			</div>
		);
		return (
      <div>
				<Nav/>
  			<section className="content">
          {this.state.post? _post:_loader}
  			</section>
			</div>
		);
	}
}
export default PostDetail;
