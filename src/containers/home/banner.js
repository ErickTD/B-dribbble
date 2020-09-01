import React from 'react';
import BannerComponent from '../../components/banner';
import img from '../../images/social-media.jpg';
import LinecolorsComponent from '../../components/linecolors';

const BannerContainer = () => (
  <BannerComponent>
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <h1 className="text-white">Make contracts the start of something great.</h1>
          <LinecolorsComponent />
          <p className="text-white">Contract management software yor whole team will love.</p>
          <a href="/" className="mt-3 btn btn-primary btn-lg" role="button">Request demo</a>
        </div>
        <div className="col col-md-8">
          <img className="img-fluid" alt="" src={img} />
        </div>
      </div>
    </div>
  </BannerComponent>
);

export default BannerContainer;
