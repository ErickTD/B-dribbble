import React from 'react';
import LinecolorsComponent from '../../components/linecolors';
import img from '../../images/home-collaborate.png';
import TitleComponent from '../../components/title';
import ButtonComponent from '../../components/button';

const CollaborateContainer = () => (
  <section className="section">
    <div className="container-fluid">
      <div className="row justify-content-end align-items-center gy-5">
        <div className="col-12 col-md-5 col-xl-4">
          <TitleComponent>Collaborate better.</TitleComponent>
          <LinecolorsComponent />
          <p className="w-75 pb-3">
            Work smarter with inline commenting, versioning and
            seamless approval workflow within your browser.
          </p>
          <ButtonComponent link="/">Learn more</ButtonComponent>
        </div>
        <div className="col col-md-6">
          <img className="img-fluid w-100" alt="Collaborate better" src={img} />
        </div>
      </div>
    </div>
  </section>
);

export default CollaborateContainer;
