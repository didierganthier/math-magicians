/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Display from './Display';
import Keypad from './Keypad';

export default class Calculator extends Component {
  render() {
    return (
      <div>
        <Display />
        <Keypad />
      </div>
    );
  }
}
