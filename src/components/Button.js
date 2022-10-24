/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      className: props.className,
    };
  }

  render() {
    return (
      <button type="button" className={`${this.state.className} min-w-full h-[70px]`}>
        {this.state.value}
      </button>
    );
  }
}
