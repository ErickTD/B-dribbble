import React from 'react';
import LinecolorsComponent from '../../components/linecolors';
import img from '../../images/legal-collaboration.png';
import TitleComponent from '../../components/title';

const CollaborationContainer = () => (
  <section className="section-md bg-light py-3">
    <div className="container py-3 my-3">
      <div className="row justify-content-center g-5  pt-3">
        <div className="col-md-10 col-lg-7">
          <TitleComponent size="3">Secure collaboration.</TitleComponent>
          <LinecolorsComponent />
          <p className="">
            Gain internal approvals and get to yes faster with commenting, redining
            and legally-binding e-signature. With a full audit trail of activity, you will
            never lose control of contracts again.
          </p>
        </div>
        <div className="col-12">
          <img className="img-fluid" alt="" src={img} />
        </div>
      </div>
    </div>
  </section>
);

export default CollaborationContainer;
