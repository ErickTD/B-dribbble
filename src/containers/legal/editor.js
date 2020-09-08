import React from 'react';
import img from '../../images/legal-editor.png';
import LinecolorsComponent from '../../components/linecolors';

const EditorContainer = () => (
  <section className="section-md py-3">
    <div className="container py-3 my-3">
      <div className="row g-5">
        <div className="col-sm-12 col-md-6">
          <h2 className="display-4 font-weight-bold">
            An editor designed for contracts.
          </h2>
          <LinecolorsComponent />
          <p className="w-75">
            Put the joy back into contracts with a unique editor
            designed from the ground up to legal teams.
            Effortlessly scale your legal workflows with self-serve
            templates and conversational forms.
          </p>
        </div>
        <div className="col-sm-12 col-md-6">
          <img className="img-fluid" alt="" src={img} />
        </div>
      </div>
    </div>
  </section>
);

export default EditorContainer;
