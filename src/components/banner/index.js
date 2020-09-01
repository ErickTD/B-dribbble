import React from 'react';
import PropTypes from 'prop-types';

const BannerComponent = ({ children, bgcolor }) => (
  <div className={`min-vh-100 bg-${bgcolor} d-flex align-items-center`}>
    {children}
  </div>
);

BannerComponent.defaultProps = {
  bgcolor: 'dark',
};

BannerComponent.propTypes = {
  children: PropTypes.element.isRequired,
  bgcolor: PropTypes.string,
};

export default BannerComponent;
