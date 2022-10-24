/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Calculator from './components/Calculator';

export default class App extends Component {
  render() {
    return (
      <div className="bg-[#22272D] h-screen pl-4 pt-4">
        <Calculator />
      </div>
    );
  }
}
