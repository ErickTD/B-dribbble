import React from 'react';
import img from '../../images/legal-editor.png';
import LinecolorsComponent from '../../components/linecolors';
import TitleComponent from '../../components/title';

const EditorContainer = () => (
  <section className="section">
    <div className="container">
      <div className="row g-5">
        <div className="col-md-6">
          <TitleComponent size="3">An editor designed for contracts.</TitleComponent>
          <LinecolorsComponent />
          <p className="w-75">
            Put the joy back into contracts with a unique editor
            designed from the ground up to legal teams.
            Effortlessly scale your legal workflows with self-serve
            templates and conversational forms.
          </p>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" alt="" src={img} />
        </div>
      </div>
    </div>
  </section>
);

export default EditorContainer;
