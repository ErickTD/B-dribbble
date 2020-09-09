import React from 'react';
import BannerComponent from '../../components/banner';
import img from '../../images/social-media.jpg';
import LinecolorsComponent from '../../components/linecolors';
import ButtonComponent from '../../components/button';

const BannerContainer = () => (
  <BannerComponent bgcolor="light">
    <div className="container">
      <div className="row align-items-center g-5">
        <div className="col-md-6">
          <img className="img-fluid" alt="" src={img} />
        </div>
        <div className="col-md-6">
          <p className="text-secondary text-uppercase">Juro for legal teams</p>
          <h1 className="display-2 font-weight-bold">Become an enabler, not a blocker.</h1>
          <LinecolorsComponent />
          <p className="font-weight-bold">
            Free up your legal team to do more high value work,
            wihle helping the business close contracts faster.
          </p>
          <ButtonComponent link="/">Request demo</ButtonComponent>
        </div>
      </div>
    </div>
  </BannerComponent>
);

export default BannerContainer;
