/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Display from './Display';
import Keypad from './Keypad';

export default class Calculator extends Component {
  render() {
    return (
      <div className="w-[500px] h-[428px] border">
        <Display />
        <Keypad />
      </div>
    );
  }
}
