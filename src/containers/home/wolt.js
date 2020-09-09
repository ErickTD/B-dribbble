import React from 'react';
import img from '../../images/quote-profile.jpg';
import QuotesComponent from '../../components/quotes';
import IconComponent from '../../components/icon';

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
            <IconComponent icon="arrow-r" extraClass="ml-3" />
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
