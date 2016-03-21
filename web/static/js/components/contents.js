import React, { Component, PropTypes } from 'react';
import PostForm from './post-form';

export default class Contents extends Component {
  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <div>
          <h2 className="contents__title">{post.title}</h2>
          <p className="contents__body">{post.body}</p>
        </div>
      );
    })
  }

  render() {
    return (
      <div className="contents">
        <PostForm addPost={this.props.post} />
        {
          this.props.posts.length !== 0
            ? this.renderPosts()
            : 'loading'
        }
      </div>
    );
  }
}
