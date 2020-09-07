import React from 'react';
import PropTypes from 'prop-types';

const LabelCardComponent = ({ text, img }) => (
  <div className="card border-0 p-3">
    <div className="row justify-content-between align-items-center">
      <div className="col-4 text-center">
        <img className="img-fluid" alt="" src={img} />
      </div>
      <div className="col-8">
        <p>{text}</p>
      </div>
    </div>
  </div>
);

LabelCardComponent.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default LabelCardComponent;
