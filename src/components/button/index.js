import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponent = ({ link, children }) => (
  <a
    href={link}
    className="mt-3 btn btn-primary btn-lg"
    role="button"
  >
    {children}
  </a>
);

ButtonComponent.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ButtonComponent;
