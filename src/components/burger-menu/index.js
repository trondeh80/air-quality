import React, { Component } from 'react';

import './menu.scss';

export default class BurgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen || false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState(st => ({ isOpen: !st.isOpen }));
  }

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;
    return (
      <div className={`menu ${isOpen ? 'open' : 'closed'}`}>
        <div className="btn-wrap">
          <button type="button" className="toggle" onClick={this.onClick}>
            <div className="btn-inner">
              <span className="on">CLOSE <span>&times;</span></span>
              <span className="off">MENU</span>
            </div>
          </button>
        </div>
        <div className="controls-wrap">
          {children}
        </div>
      </div>
    );
  }
}
