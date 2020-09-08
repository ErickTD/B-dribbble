import React from 'react';
import PropTypes from 'prop-types';
import NavbarComponent from '../components/navbar';
import FooterComponent from '../components/footer';
import './global.css';

const Layout = ({ children }) => (
  <>
    <NavbarComponent />
    {children}
    <FooterComponent />
  </>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Layout;
