/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Button from './Button';

class Keypad extends React.Component {
  render() {
    const items = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    const signs = ['/', 'x', '-', '+', '='];

    return (
      <div className="grid overflow-hidden grid-cols-8 grid-rows-8 gap-0.5">
        {items.map((item) => (
          <Button key={item} handleClick={this.props.handleClick} value={item} className={`${signs.includes(item) ? 'bg-[#F5913E]' : 'bg-[#E0E0E0]'} ${item === '0' ? 'col-span-4' : 'col-span-2'}`} />
        ))}
      </div>
    );
  }
}

export default Keypad;
