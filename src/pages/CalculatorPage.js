import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import Calculator from '../components/Calculator';
import kid from '../assets/images/kid.jpeg';

const CalculatorPage = () => (
  <div className="bg-[#22272D] h-full pb-20 px-20">
    <TypeWriterEffect
      textStyle={{
        fontFamily: 'monospace',
        fontSize: '3.75rem',
        color: '#fff',
        'text-shadow': '0 0 10px #fff',
      }}
      startDelay={100}
      cursorColor="white"
      text="Let's do some math!"
      typeSpeed={100}
      eraseSpeed={100}
    />
    <div className="md:flex hidden justify-between">
      <img src={kid} alt="math" className="h-[80vh]" />
      <Calculator />
    </div>
    <div className="md:hidden flex flex-col justify-center items-center">
      <Calculator />
      <img src={kid} alt="math" className="h-[80vh]" />
    </div>
  </div>
);

export default CalculatorPage;
