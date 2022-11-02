import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  return (
    <div className="bg-[#858793] py-5 px-2 border border-white">
      <p className="flex justify-end text-white">{result}</p>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
