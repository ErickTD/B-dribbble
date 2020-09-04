import React from 'react';

const NavbarComponent = () => (
  <header>
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark py-3">
      <div className="container-md container-fluid">
        <div>
          <button
            className="navbar-toggler mr-3"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a href="/" className="navbar-brand">Juro</a>
        </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item mx-3">
              <div className="dropdown">
                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                  Solutions
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="/">Solution 1</a></li>
                  <li><a className="dropdown-item" href="/">Solution 2</a></li>
                  <li><a className="dropdown-item" href="/">Solution 3</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-white px-3" href="/">Case Studies</a>
            </li>
            <li className="nav-item mx-3">
              <div className="dropdown">
                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                  Resources
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="/">Solution 1</a></li>
                  <li><a className="dropdown-item" href="/">Solution 2</a></li>
                  <li><a className="dropdown-item" href="/">Solution 3</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-white px-3" href="/">Pricing</a>
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
