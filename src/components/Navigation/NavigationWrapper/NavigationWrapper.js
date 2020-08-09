import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import NavigationList from './NavigationList/NavigationList';
import { Typography } from '@material-ui/core';
import Logo from '../../Logo/Logo';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    height:36,
  },
  toolbar:{
    minHeight:36,
    background:'#003b71'
  },
  menu:{
    left:'auto',
    top:40,
    right:45
  },
  profileContainer:{
    display:'flex',
    alignItems:'center'
  },
  name:{
    fontSize:'0.65rem',
    '&:after':{
      content: "''",
      height: 25,
      position: 'absolute',
      width: 0.5,
      marginTop: -5,
      marginLeft: -65,
      background: 'white'
    }
  }
}));

const NavigationWrapper=()=> {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Logo height="25px"/>
          <NavigationList></NavigationList>
            <div className={classes.profileContainer}>
            <Typography className={classes.name}>John Doe</Typography>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                className={classes.menu}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationWrapper;