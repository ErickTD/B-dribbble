import React from 'react';
import LinecolorsComponent from '../../components/linecolors';
import img from '../../images/home-faster.png';
import ButtonComponent from '../../components/button';
import TitleComponent from '../../components/title';

const FasterContainer = () => (
  <section className="section">
    <div className="container-fluid">
      <div className="row justify-content-around align-items-center">
        <div className="col-12 col-md-6 order-sm-2 order-md-1">
          <img className="img-fluid w-100" alt="Get to yes faster" src={img} />
        </div>
        <div className="col-12 col-md-4 order-sm-1 order-md-2">
          <TitleComponent>Get to yes faster.</TitleComponent>
          <LinecolorsComponent />
          <p className="pb-3">
            Accelerate agreements with mobile-responsive documents
            and legally binding e-singnature on any device to take the
            paper and the work out of papework.
          </p>
          <ButtonComponent link="/">Learn more</ButtonComponent>
        </div>
      </div>
    </div>
  </section>
);

export default FasterContainer;
