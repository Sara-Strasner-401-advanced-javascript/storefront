import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './header.scss';
import { connect } from 'react-redux';
import Cart from '../cart/simplecart';

function Header(props) {
  return (
    <>
      <AppBar position="static" className="navbar">
        <div className="navbar">
          <Toolbar>
            <Typography variant="h4">Storefont</Typography>
            <div id="cart">
              <p>Cart ({props.cart.length})</p>
            </div>
          </Toolbar>
        </div>
      </AppBar>
      <Cart />
    </>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(Header);
