import React from 'react';
import LinecolorsComponent from '../../components/linecolors';
import img from '../../images/home-faster.png';

const FasterContainer = () => (
  <section className="py-3 my-3">
    <div className="container-fluid py-3">
      <div className="row justify-content-around align-items-center">
        <div className="col-sm-12 col-md-6">
          <img className="img-fluid w-100" alt="Get to yes faster" src={img} />
        </div>
        <div className="col-sm-12 col-md-4">
          <h2 className="display-2 font-weight-bolder">Get to yes faster.</h2>
          <LinecolorsComponent />
          <p className="pb-3">
            Accelerate agreements with mobile-responsive documents
            and legally binding e-singnature on any device to take the
            paper and the work out of papework.
          </p>
          <a href="/" className="mt-3 btn btn-primary btn-lg" role="button">Learn more</a>
        </div>
      </div>
    </div>
  </section>
);

export default FasterContainer;
