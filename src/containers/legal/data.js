import React from 'react';
import LinecolorsComponent from '../../components/linecolors';
import img from '../../images/legal-data.png';
import TitleComponent from '../../components/title';

const ContractDataContainer = () => (
  <section className="section-md bg-light pt-3">
    <div className="container pt-3">
      <div className="row justify-content-center g-5 pt-3">
        <div className="col-md-10 col-lg-8">
          <TitleComponent size="3">Learn from contract data.</TitleComponent>
          <LinecolorsComponent />
          <p className="w-75">
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
