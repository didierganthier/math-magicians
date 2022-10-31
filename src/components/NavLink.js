import React from 'react';
import PropTypes from 'prop-types';

const NavLink = (props) => {
  const { link, text } = props;

  const createdLink = `http://localhost:3000${link}`;

  return (
    <li>
      <a href={link} className={`block py-2 pr-4 pl-3 text-gray-700 ${window.location.href === createdLink ? 'bg-blue-700 md:bg-transparent md:text-blue-700' : 'md:hover:text-blue-700'} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>
        {text}
      </a>
    </li>
  );
};

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavLink;
