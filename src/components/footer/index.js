import React from 'react';
import ColumnsComponent from './columns';

const FooterComponent = () => (
  <footer className="bg-dark mt-3 pt-3">
    <div className="clearfix">.</div>
    <div className="container">
      <div className="row justify-content-between pb-3 gy-5 gy-md-3">
        <div className="col-lg-4 ">
          <div className="row">
            <div className="col">
              <button type="button" className="w-100 btn btn-primary btn-lg">Request demo</button>
            </div>
            <div className="col">
              <button type="button" className="w-100 btn btn-outline-light btn-lg">Log in</button>
            </div>
          </div>
        </div>
        <div className="col-md-auto">
          <ColumnsComponent />
        </div>
        <div className="col-auto">
          <p className="h3 text-white">Juro</p>
        </div>
      </div>
      <div className="border-top border-primary my-1" />
      <div className="row pt-3 justify-content-between align-items-center">
        <div className="col">
          <span className="text-white-50">Juro 2018. All rights reserverd.</span>
        </div>
        <div className="col-auto">
          <a href="/" className="btn btn-link text-white text-decoration-none">Privacy</a>
          <a href="/" className="btn btn-link text-white text-decoration-none">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterComponent;
