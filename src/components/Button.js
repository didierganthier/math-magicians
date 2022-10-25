/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.changeDisplayValue = this.changeDisplayValue.bind(this);
  }

  changeDisplayValue() {
    if (this.props.value === '=') {
      this.props.showResult();
    } else {
      this.props.changeDisplayValue(this.props.value);
    }
  }

  render() {
    return (
      <button type="button" onClick={this.changeDisplayValue} className={`${this.props.className} min-w-full h-[70px]`}>
        {this.props.value}
      </button>
    );
  }
}
