import React from 'react';
import PropTypes from 'prop-types';

const QuoteComponent = ({ quote }) => (
  <div className="py-3">
    <p className="h2 mb-3">{quote.text}</p>
    <div className="row py-3 align-items-center">
      <div className="col-auto">
        <img
          className="rounded-circle"
          style={{ width: '50px' }}
          alt={quote.name}
          src={quote.img}
        />
      </div>
      <div className="col">
        <p className="font-weight-bold m-0">{quote.name}</p>
      </div>
    </div>
  </div>
);

QuoteComponent.propTypes = {
  quote: PropTypes.object.isRequired,
};

export default QuoteComponent;
