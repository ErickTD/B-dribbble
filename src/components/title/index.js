import React from 'react';
import PropTypes from 'prop-types';

const TitleComponent = ({ children, size }) => (
  <h2 className={`display-${size} font-weight-bolder`}>{children}</h2>
);

TitleComponent.defaultProps = {
  size: '2',
};

TitleComponent.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default TitleComponent;
