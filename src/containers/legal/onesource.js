import React from 'react';
import img from '../../images/legal-onesource.png';
import LinecolorsComponent from '../../components/linecolors';

const OneSourceContainer = () => (
  <section className="section py-3">
    <div className="container py-3 my-3">
      <div className="row align-items-center g-5">
        <div className="col-sm-12 col-md-4">
          <h2 className="display-4 font-weight-bold">
            One source of truth.
          </h2>
          <LinecolorsComponent />
          <p>
            Stay in control and track all tour documents with a dashboard
            for your contract pipeline. Deploy powerful search capabilities
            to find exactly what you need, right when you need it.
          </p>
        </div>
        <div className="col-sm-12 col-md-8">
          <img className="img-fluid" alt="" src={img} />
        </div>
      </div>
    </div>
  </section>
);

export default OneSourceContainer;
