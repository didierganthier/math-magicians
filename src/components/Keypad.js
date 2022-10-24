/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Button from './Button';

class Keypad extends React.Component {
  render() {
    return (
      <div className="grid overflow-hidden grid-cols-8 grid-rows-8 gap-0.5">
        <Button value="AC" className="bg-[#E0E0E0] col-span-2" />
        <Button value="+/-" className="bg-[#E0E0E0] col-span-2" />
        <Button value="%" className="bg-[#E0E0E0] col-span-2" />
        <Button value="÷" className="bg-[#F5913E] col-span-2" />
        <Button value="7" className="bg-[#E0E0E0] col-span-2" />
        <Button value="8" className="bg-[#E0E0E0] col-span-2" />
        <Button value="9" className="bg-[#E0E0E0] col-span-2" />
        <Button value="x" className="bg-[#F5913E] col-span-2" />
        <Button value="4" className="bg-[#E0E0E0] col-span-2" />
        <Button value="5" className="bg-[#E0E0E0] col-span-2" />
        <Button value="6" className="bg-[#E0E0E0] col-span-2" />
        <Button value="-" className="bg-[#F5913E] col-span-2" />
        <Button value="1" className="bg-[#E0E0E0] col-span-2" />
        <Button value="2" className="bg-[#E0E0E0] col-span-2" />
        <Button value="3" className="bg-[#E0E0E0] col-span-2" />
        <Button value="+" className="bg-[#F5913E] col-span-2" />
        <Button value="0" className="bg-[#E0E0E0] col-span-4" />
        <Button value="." className="bg-[#E0E0E0] col-span-2" />
        <Button value="=" className="bg-[#F5913E] col-span-2" />
      </div>
    );
  }
}

export default Keypad;
