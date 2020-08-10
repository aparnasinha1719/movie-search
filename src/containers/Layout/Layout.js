import React, { Component } from 'react'
import { Box } from '@material-ui/core';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import NavigationWrapper from '../../components/Navigation/NavigationWrapper/NavigationWrapper';
export class Layout extends Component {
    render() {
        return (
            <Auxiliary>
            <NavigationWrapper></NavigationWrapper>
            <Box style={{padding:30}}>
            {this.props.children}
            </Box>
            </Auxiliary>
        )
    }
}

export default Layout;
