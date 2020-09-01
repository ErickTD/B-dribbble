import React from 'react';

const NavbarComponent = () => (
  <header>
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark py-3">
      <div className="container-md container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a href="/" className="navbar-brand">Juro</a>
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item mx-3">
              <a className="nav-link px-3" href="/">Solutions</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link px-3" href="/">Case Studies</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link px-3" href="/">Resources</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link px-3" href="/">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-outline-light btn-sm px-3" href="/" aria-disabled="true">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default NavbarComponent;
