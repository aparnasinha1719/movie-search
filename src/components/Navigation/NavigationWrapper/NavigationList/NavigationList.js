import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavigationItem from './NavigationItem/NavigationItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
    textAlign:'left',
    display: 'flex',
    listStyle: 'none',
    color:'white',
    margin:0,
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const NavigationItems=()=> {
  const classes = useStyles();

  return (
   <ul className={classes.root}>
     <NavigationItem link='/'>Home</NavigationItem>
     <NavigationItem link='/favourites'>Favourites</NavigationItem> 
   </ul>
  );
}

export default NavigationItems;