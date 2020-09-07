import React from 'react';
import BannerComponent from '../../components/banner';
import img from '../../images/social-media.jpg';
import LinecolorsComponent from '../../components/linecolors';

const BannerContainer = () => (
  <BannerComponent bgcolor="light">
    <div className="container">
      <div className="row align-items-center g-5">
        <div className="col-sm-12 col-md-6">
          <img className="img-fluid" alt="" src={img} />
        </div>
        <div className="col-sm-12 col-md-6">
          <p className="text-secondary text-uppercase">Juro for legal teams</p>
          <h1 className="display-2 font-weight-bold">Become an enabler, not a blocker.</h1>
          <LinecolorsComponent />
          <p className="font-weight-bold">
            Free up your legal team to do more high value work,
            wihle helping the business close contracts faster.
          </p>
          <a href="/" className="mt-3 btn btn-primary btn-lg" role="button">Request demo</a>
        </div>
      </div>
    </div>
  </BannerComponent>
);

export default BannerContainer;
