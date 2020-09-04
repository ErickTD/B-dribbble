import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import QuoteComponent from './quote';

const arrowR = (
  <svg
    width="1.5em"
    height="1.5em"
    viewBox="0 0 16 16"
    className="bi bi-arrow-right"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
  </svg>
);

const QuotesComponent = ({ quotes }) => {
  let carousel;
  const [slide, setSlide] = useState(1);
  useEffect(() => {
    if (document) {
      const myCarousel = document.querySelector('#quoteCarousel');
      const next = document.querySelector('#carouselCustomNext');
      // eslint-disable-next-line no-undef
      carousel = new bootstrap.Carousel(myCarousel, {
        slide: true,
        interval: 8000,
      });
      myCarousel.addEventListener('slid.bs.carousel', (e) => {
        setSlide(e.to + 1);
      });
      next.addEventListener('click', () => carousel.next());
    }
  }, []);
  return (
    <>
      <div className="carousel slide" id="quoteCarousel">
        <div className="carousel-inner">
          {quotes.map((quote, i) => (
            <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={quote.name}>
              <QuoteComponent quote={quote} />
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-end align-items-center">
        <span className="pr-2">{slide}</span>
        <span className="h1 font-weight-lighter px-2">/</span>
        <span className="pl-2">{quotes.length}</span>
        <button id="carouselCustomNext" className="btn btn-link mx-1" type="submit">
          {arrowR}
        </button>
      </div>
    </>
  );
};

QuotesComponent.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default QuotesComponent;
