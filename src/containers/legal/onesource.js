import React from 'react';
import img from '../../images/legal-onesource.png';
import LinecolorsComponent from '../../components/linecolors';
import TitleComponent from '../../components/title';

const OneSourceContainer = () => (
  <section className="section">
    <div className="container">
      <div className="row align-items-center g-5">
        <div className="col-md-4">
          <TitleComponent size="3">One source of truth.</TitleComponent>
          <LinecolorsComponent />
          <p>
            Stay in control and track all tour documents with a dashboard
            for your contract pipeline. Deploy powerful search capabilities
            to find exactly what you need, right when you need it.
          </p>
        </div>
        <div className="col-md-8">
          <img className="img-fluid" alt="" src={img} />
        </div>
      </div>
    </div>
  </section>
);

export default OneSourceContainer;
