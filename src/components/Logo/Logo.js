import React from 'react';

import Logo from '../../assets/imgs/reel.svg';
import classes from './Logo.module.css'
const logo =(props)=>(
    <div className={classes.Logo} >
        <img src={Logo} alt="Champion" style={{height:props.height}}></img>
    </div>
);

export default logo;