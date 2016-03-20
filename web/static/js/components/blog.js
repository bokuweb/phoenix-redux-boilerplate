import React, { Component, PropTypes } from 'react';
import SideMenu from './side-menu';
import Contents from './contents';

export default class Blog extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.blog.fetch();
  }

  render() {
    return (
      <div className="blog">
        <SideMenu />
        <Contents
          posts={this.props.blog.posts}
          post={this.props.actions.blog.post}
        />
      </div>
    );
  }
}
