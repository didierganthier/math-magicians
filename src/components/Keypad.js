/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Keypad extends React.Component {
  render() {
    return (
      <div className="keypad-container">
        <div className="input-keys">
          <div className="function-keys">
            <button type="button" className="key-clear">clear</button>
            <button type="button" className="key-sign">±</button>
            <button type="button" className="key-percent">%</button>
          </div>
          <div className="digit-keys">
            <button type="button" className="key-0">0</button>
            <button type="button" className="key-dot">●</button>
            <button type="button" className="key-1">1</button>
            <button type="button" className="key-2">2</button>
            <button type="button" className="key-3">3</button>
            <button type="button" className="key-4">4</button>
            <button type="button" className="key-5">5</button>
            <button type="button" className="key-6">6</button>
            <button type="button" className="key-7">7</button>
            <button type="button" className="key-8">8</button>
            <button type="button" className="key-9">9</button>
          </div>
        </div>
        <div className="operator-keys">
          <button type="button" className="key-divide">÷</button>
          <button type="button" className="key-multiply">×</button>
          <button type="button" className="key-subtract">−</button>
          <button type="button" className="key-add">+</button>
          <button type="button" className="key-equals">=</button>
        </div>
      </div>
    );
  }
}

export default Keypad;
