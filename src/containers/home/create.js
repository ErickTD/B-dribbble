import React from 'react';
import LinecolorsComponent from '../../components/linecolors';
import img from '../../images/homecreate.png';
import TitleComponent from '../../components/title';

const CreateContainer = () => (
  <section className="section">
    <div className="container">
      <TitleComponent>Create contract magic.</TitleComponent>
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
