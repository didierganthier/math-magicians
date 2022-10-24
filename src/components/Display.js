/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Display extends React.Component {
  render() {
    return (
      <div className="bg-[#858793] py-5 px-2 border border-white">
        <p className="flex justify-end text-white">0</p>
      </div>
    );
  }
}

export default Display;
