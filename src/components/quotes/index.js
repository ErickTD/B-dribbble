import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import QuoteComponent from './quote';

const QuotesComponent = ({ quotes }) => {
  let carousel;
  useEffect(() => {
    if (document) {
      const myCarousel = document.querySelector('#quoteCarousel');
      // eslint-disable-next-line no-undef
      carousel = new bootstrap.Carousel(myCarousel);
      console.log('CB', myCarousel, carousel, {
        slide: true,
        interval: 3000,
      });
    }
  }, []);
  return (
    <>
      <div className="carousel slide" id="quoteCarousel" data-ride="carousel">
        <div className="carousel-inner">
          {quotes.map((quote) => <QuoteComponent key={quote.name} quote={quote} />)}
        </div>
      </div>
    </>
  );
};

QuotesComponent.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default QuotesComponent;
