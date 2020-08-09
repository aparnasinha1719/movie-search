import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import NavigationWrapper from '../../components/Navigation/NavigationWrapper/NavigationWrapper';
export class Layout extends Component {
    render() {
        return (
            <Auxiliary>
            <NavigationWrapper></NavigationWrapper>
                {this.props.children}
            </Auxiliary>
        )
    }
}

export default Layout;
