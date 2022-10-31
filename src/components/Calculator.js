import React from 'react';
import calculate from '../logic/calculate';
import Display from './Display';
import Keypad from './Keypad';

const Calculator = () => {
  const [state, setState] = React.useState({
    total: '0',
    next: null,
  });

  const handleClick = (e) => {
    setState(calculate(state, e.target.innerText));
  };

  const { total, next } = state;
  let result = '0';
  result = next || total;

  return (
    <div className="md:w-2/4 lg:w-2/6 h-full w-full border">
      <Display result={result} />
      <Keypad handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
