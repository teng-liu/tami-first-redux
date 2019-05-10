import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/postActions';
// rcc  - class, rfc - function
class Posts extends Component {

  componentWillMount(){
    
    this.props.fetchPosts();
    console.log(this.props);
    
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost){
      this.props.posts.unshift(nextProps.newPost);  // .push
    }
  }
  
  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>post-example</h1>
        {postItems}
      </div>
    )
  }
}

// export default Post;

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);