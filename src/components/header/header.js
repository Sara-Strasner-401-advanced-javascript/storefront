import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './header.scss';

function Header() {
  return (
    <AppBar position="static" className="navbar">
      <div className='navbar'>
        <Toolbar>
          <Typography variant="h4">Storefont</Typography>
        </Toolbar>
      </div>
    </AppBar>
  );
}

export default Header;
