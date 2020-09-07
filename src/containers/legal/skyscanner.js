import React from 'react';
import QuoteComponent from '../../components/quotes/quote';
import IconComponent from '../../components/icon';
import img from '../../images/quote-profile.jpg';
import img2 from '../../images/skyscanner.png';

const quote = {
  text: 'Before it took between 15 and 25 minutes in Word to set up a contract for one customer. With Juro it takes less than a minute.',
  img,
  name: 'Juho Uitti, Sales Team 3',
};

const SkyscannerContainer = () => (
  <section className="py-3 my-3">
    <div className="container py-3 my-3">
      <div className="row justify-content-between align-items-center g-5">
        <div className="col-12 col-md-4">
          <p><img alt="" src={img2} className="img-fluid" /></p>
          <p className="font-weight-bold">
            Forward-looking legal teams are supercharging contracts with Juro
          </p>
          <a href="/" className="text-decoration-none font-weight-bold">
            See our case studies
            <IconComponent icon="arrow-r" extraClass="ml-3" />
          </a>
        </div>
        <div className="col-12 col-md-6">
          <QuoteComponent quote={quote} />
        </div>
      </div>
    </div>
  </section>
);

export default SkyscannerContainer;
