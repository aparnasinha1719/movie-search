import React, { Component } from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
import CardWrapper from '../../components/Cards/CardWrapper/CardWrapper';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
export class Home extends Component {
	constructor() {
        super()
        this.state={
            moviesList:[]
        }
    }
	getMovies = (movies) => {
        this.setState({moviesList:movies})
    };
	render() {
		return (
			<Auxiliary>
				<Searchbar getMovies={this.getMovies}></Searchbar>
				<CardWrapper moviesList={this.state.moviesList}></CardWrapper>
			</Auxiliary>
		);
	}
}

export default Home;
