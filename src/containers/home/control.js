import React from 'react';
import LinecolorsComponent from '../../components/linecolors';
import img from '../../images/home-tasks.png';
import TitleComponent from '../../components/title';

const ControlContainer = () => (
  <section className="section">
    <div className="container-fluid">
      <div className="row justify-content-center gx-0 gy-5">
        <div className="col col-md-7 col-lg-5 col-xl-4">
          <TitleComponent>Keep control.</TitleComponent>
          <LinecolorsComponent />
          <p className="pb-3">
            No more bottlenecks. Track activity in real time throughout the contract
            lifecycle and never let a lack of visibility slow contracts down again.
          </p>
        </div>
        <div className="col-12 text-right">
          <img style={{ width: '90%' }} className="img-fluid" alt="Keep control" src={img} />
        </div>
      </div>
    </div>
  </section>
);

export default ControlContainer;
