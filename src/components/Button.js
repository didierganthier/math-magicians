/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.value);
  }

  render() {
    return (
      <button type="button" value={this.props.value} onClick={this.props.handleClick} className={`${this.props.className} min-w-full h-[70px]`}>
        {this.props.value}
      </button>
    );
  }
}
