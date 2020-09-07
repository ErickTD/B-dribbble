import React from 'react';
import PropTypes from 'prop-types';
import LinecolorsComponent from '../linecolors';
import IconComponent from '../icon';

const VerticalCardComponent = ({ title, text, icon }) => (
  <div className="col-12 col-md-3 card border-0 mx-3">
    <div className="card-body">
      <h5>
        <IconComponent icon={icon} extraClass="h1 text-primary" />
      </h5>
      <h5 className="card-title">{title}</h5>
      <LinecolorsComponent />
      <p className="card-text">
        {text}
      </p>
    </div>
  </div>
);

VerticalCardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default VerticalCardComponent;
