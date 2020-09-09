import React from 'react';
import PropTypes from 'prop-types';

const TitleComponent = ({ children }) => (
  <h2 className="display-2 font-weight-bolder">{children}</h2>
);

TitleComponent.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TitleComponent;
