import React, { Component} from 'react'
import CardWrapper from '../../components/Cards/CardWrapper/CardWrapper';

export class Favourites extends Component {
    constructor(){
        super();
        this.state={
            moviesList:[]
        }
    }
    componentDidMount(){
        this.setState({moviesList:localStorage.getItem('favourites')?JSON.parse(localStorage.getItem('favourites')):[]})
    }    
    render() {
        return (
            <CardWrapper moviesList={this.state.moviesList}></CardWrapper>
        )
    }
}

export default Favourites;
