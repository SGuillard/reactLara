import React from 'react';
import { connect } from 'react-redux';

const Header = ({ cart }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div className="container">
      <div className="navbar-brand">Shopping Cart demo</div>
      <p style={{ color: 'white' }}> Cart : {cart.cart.quantity}</p>
    </div>
  </nav>
);

const mapStateToProps = state => ({ cart: state });

export default connect(mapStateToProps)(Header);
