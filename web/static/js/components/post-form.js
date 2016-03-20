import React, { Component, PropTypes } from 'react';

export default class PostForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const title = this.refs.title.value.trim();
    const body = this.refs.body.value.trim();
    if (!title || !body) return;
    this.props.post(JSON.stringify({ post: { title, body } }));
  }

  render() {
    return (
      <div className="post-form">
        <form className="post-form__form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="title" placeholder="title" />
          <textarea ref="body" placeholder="body" />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
}
