import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { handleClick, value, className } = props;

  return (
    <button type="button" value={value} onClick={handleClick} className={`${className} min-w-full h-[70px]`}>
      {value}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
