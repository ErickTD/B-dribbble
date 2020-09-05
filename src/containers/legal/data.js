import React from 'react';
import LinecolorsComponent from '../../components/linecolors';
import img from '../../images/legal-data.png';

const ContractDataContainer = () => (
  <section className="bg-light py-3 my-3">
    <div className="container py-3 my-3">
      <div className="row justify-content-center g-5">
        <div className="col-sm-12 col-md-10 col-lg-7">
          <h2 className="display-4 font-weight-bold">Learn from contract data.</h2>
          <LinecolorsComponent />
          <p className="">
            Become more data-driven with Juro AI-enabled analytics. Improve
            completion rates, identify bottlenecks and establish patterns in contract
            negotiations. And with data export, report back to management on how
            you are hitting your goals.
          </p>
        </div>
        <div className="col-12">
          <img className="img-fluid" alt="" src={img} />
        </div>
      </div>
    </div>
  </section>
);

export default ContractDataContainer;
