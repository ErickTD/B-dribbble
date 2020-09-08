import React from 'react';
import LinecolorsComponent from '../../components/linecolors';
import img from '../../images/home-collaborate.png';

const CollaborateContainer = () => (
  <section className="section py-3">
    <div className="container-fluid py-3">
      <div className="row justify-content-end align-items-center">
        <div className="col-sm-12 col-md-5 col-lg-4">
          <h2 className="display-2 font-weight-bolder">Collaborate better.</h2>
          <LinecolorsComponent />
          <p className="w-75 pb-3">
            Work smarter with inline commenting, versioning and
            seamless approval workflow within your browser.
          </p>
          <a href="/" className="mt-3 btn btn-primary btn-lg" role="button">Learn more</a>
        </div>
        <div className="col-md-6 col-sm-12">
          <img className="img-fluid w-100" alt="Collaborate better" src={img} />
        </div>
      </div>
    </div>
  </section>
);

export default CollaborateContainer;
