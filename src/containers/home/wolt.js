import React from 'react';
import img from '../../images/quote-profile.jpg';
import QuotesComponent from '../../components/quotes';

const quotes = [
  {
    text: 'Juro Makes it extremely easy to manage contracts, and there is less room for human error.',
    img,
    name: 'Juho Uitti, Sales Team',
  },
  {
    text: 'Juro Makes it extremely easy to manage contracts, and there is less room for human error.',
    img,
    name: 'Juho Uitti, Sales Team 2',
  },
  {
    text: 'Juro Makes it extremely easy to manage contracts, and there is less room for human error.',
    img,
    name: 'Juho Uitti, Sales Team 3',
  },
];

const arrowR = (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    className="bi bi-arrow-right ml-3"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
  </svg>
);

const WoltContainer = () => (
  <section className="py-3 bg-light ">
    <div className="container py-3">
      <div className="row justify-content-between align-items-center py-3 gy-5">
        <div className="col-12 col-md-4 offset-md-1">
          <h1 className="display-4 font-weight-bold font-italic">Wolt</h1>
          <h6 className="mb-3 font-weight-bold lh-lg">
            Creating business partnerships in minutes with
            with frictionless contract management
          </h6>
          <a href="/" className="text-decoration-none font-weight-bold">
            See our case studies
            {arrowR}
          </a>
        </div>
        <div className="col-12 col-md-6">
          <QuotesComponent quotes={quotes} />
        </div>
      </div>
    </div>
  </section>
);

export default WoltContainer;
