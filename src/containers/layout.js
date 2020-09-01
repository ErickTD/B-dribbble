import React from 'react';
import PropTypes from 'prop-types';
import NavbarComponent from '../components/navbar';

const Layout = ({ children }) => (
  <>
    <NavbarComponent />
    {children}
    <p>footer</p>
  </>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
