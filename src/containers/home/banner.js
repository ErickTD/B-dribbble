import React from 'react';
import BannerComponent from '../../components/banner';
import img from '../../images/social-media.jpg';
import LinecolorsComponent from '../../components/linecolors';
import ButtonComponent from '../../components/button';

const BannerContainer = () => (
  <BannerComponent>
    <div className="container">
      <div className="row align-items-center gy-5">
        <div className="col">
          <h1 className="text-white">Make contracts the start of something great.</h1>
          <LinecolorsComponent />
          <p className="text-white">Contract management software yor whole team will love.</p>
          <ButtonComponent link="/">Request demo</ButtonComponent>
        </div>
        <div className="col-sm-12 col-md-8">
          <img className="img-fluid" alt="" src={img} />
        </div>
      </div>
    </div>
  </BannerComponent>
);

export default BannerContainer;
