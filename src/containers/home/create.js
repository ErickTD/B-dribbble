import React from 'react';
import LinecolorsComponent from '../../components/linecolors';
import img from '../../images/homecreate.png';

const CreateContainer = () => (
  <section className="py-3 my-3">
    <div className="container py-3">
      <h2 className="display-2 font-weight-bolder">Create contract magic.</h2>
      <LinecolorsComponent />
      <p className="w-75 pb-3">
        Contracts are agreed at the happiest point in your business life. Do not
        let legacy systemsand pdfs get in the way of managing your most important
        business relationships.
      </p>
      <img className="img-fluid shadow-lg rounded" alt="Create contract magic" src={img} />
    </div>
  </section>
);

export default CreateContainer;
