import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Keypad = (props) => {
  const { handleClick } = props;

  const items = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const signs = ['/', 'x', '-', '+', '='];

  return (
    <div className="grid overflow-hidden grid-cols-8 grid-rows-8 gap-0.5">
      {items.map((item) => (
        <Button key={item} handleClick={handleClick} value={item} className={`${signs.includes(item) ? 'bg-[#F5913E]' : 'bg-[#E0E0E0]'} ${item === '0' ? 'col-span-4' : 'col-span-2'}`} />
      ))}
    </div>
  );
};

Keypad.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Keypad;
