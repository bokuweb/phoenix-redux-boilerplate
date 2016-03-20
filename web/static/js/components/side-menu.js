import React, { Component, PropTypes } from 'react';

export default class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu">
        <img src="./images/icon.png" className="side-menu__icon"/>
        <div className="side-menu__title">Phoenix Redux Blog Example</div>
      </div>
    );
  }
}
