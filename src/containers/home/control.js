import React from 'react';
import LinecolorsComponent from '../../components/linecolors';
import img from '../../images/home-tasks.png';

const ControlContainer = () => (
  <section className="py-3 my-3">
    <div className="container py-3">
      <div className="row justify-content-around">
        <div className="col-sm-10 col-md-5">
          <h2 className="display-2 font-weight-bolder">Keep control.</h2>
          <LinecolorsComponent />
          <p className="pb-3">
            No more bottlenecks. Track activity in real time throughout the contract
            lifecycle and never let a lack of visibility slow contracts down again.
          </p>
        </div>
      </div>
    </div>
    <div className="container-fluid py-3">
      <div className="row justify-content-end">
        <div className="col-11">
          <img className="img-fluid w-100" alt="Keep control" src={img} />
        </div>
      </div>
    </div>
  </section>
);

export default ControlContainer;
