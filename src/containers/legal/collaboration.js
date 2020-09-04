import React from 'react';
import LinecolorsComponent from '../../components/linecolors';
import img from '../../images/legal-collaboration.png';

const CollaborationContainer = () => (
  <section className="bg-light py-3 my-3">
    <div className="container py-3 my-3">
      <div className="row justify-content-center g-5">
        <div className="col-sm-12 col-md-10 col-lg-6">
          <h2 className="display-4 font-weight-bold">Secure collaboration.</h2>
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
