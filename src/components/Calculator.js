/* eslint-disable no-eval */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// import calculate from '../logic/calculate';
import Display from './Display';
import Keypad from './Keypad';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.changeDisplayValue = this.changeDisplayValue.bind(this);
    this.showResult = this.showResult.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      displayValue: '0',
    //   numbers: [],
    //   operators: [],
    //   selectedOperator: '',
    //   storedValue: '',
    };
  }

  changeDisplayValue(value) {
    this.setState({ displayValue: this.state.displayValue === '0' ? value : this.state.displayValue + value });
  }

  showResult() {
    this.setState({ displayValue: eval(this.state.displayValue) });
  }

  reset() {
    this.setState({ displayValue: '0' });
  }

  render() {
    return (
      <div className="w-[500px] h-[428px] border">
        <Display displayValue={this.state.displayValue} />
        <Keypad displayValue={this.state.displayValue} showResult={this.showResult} changeDisplayValue={this.changeDisplayValue} />
      </div>
    );
  }
}
