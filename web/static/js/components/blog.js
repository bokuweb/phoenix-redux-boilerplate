import React, { Component } from 'react';

export default class Blog extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.blog.fetchArticles();
  }

  render() {
    return (
      <div>
        {
          this.props.blog.posts.length !== 0
            ? this.props.blog.posts[0].title
            : 'loading'
        }
      </div>
    );
  }
}