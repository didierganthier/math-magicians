import React, { Component } from 'react';
import calculate from '../logic/calculate';
import Display from './Display';
import Keypad from './Keypad';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => (calculate(state, e.target.innerText)));
  }

  render() {
    const { total, next } = this.state;
    let result = '0';
    result = next || total;

    return (
      <div className="w-[500px] h-[428px] border">
        <Display result={result} />
        <Keypad handleClick={this.handleClick} />
      </div>
    );
  }
}
