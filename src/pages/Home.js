import React, { useEffect, useState } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

const Home = () => {
  const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  Gulpa qui officia deserunt molit anim id est laborum. lpsu. <b>Lorem</b> ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. EXcepteur sint occaecat cupidatat non proident, sunt in
  culpa qui oficia deserunt molit anim id est laborum. Ipsu`;

  const waveHand = '👋';

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2500);
  }, []);

  return (
    <div className="bg-[#22272D] h-screen pl-12">
      <div className="flex flex-col justify-start h-full">
        <div className="flex">
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'monospace',
              fontSize: '3.75rem',
              color: '#fff',
              'text-shadow': '0 0 10px #fff',
              marginTop: '5rem',
            }}
            startDelay={100}
            cursorColor="white"
            text="Welcome to our page!"
            typeSpeed={100}
            eraseSpeed={100}
          />
          <span className={`animate-wave text-7xl mt-20 ${show ? '' : 'hidden'}`}>{waveHand}</span>
        </div>
        <div className="flex flex-col justify-start mt-10">
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'monospace',
              fontSize: '1rem',
              color: '#fff',
              'text-shadow': '0 0 10px #fff',
            }}
            startDelay={100}
            cursorColor="white"
            text={lorem}
            typeSpeed={10}
            eraseSpeed={100}
          />
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'monospace',
              fontSize: '1rem',
              color: '#fff',
              'text-shadow': '0 0 10px #fff',
              marginTop: '20px',
            }}
            startDelay={10000}
            cursorColor="white"
            text={lorem}
            typeSpeed={10}
            eraseSpeed={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
