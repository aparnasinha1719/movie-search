import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

import classes from './AddFavourites.module.css';
const AddFavourites = (props) => {
	let movieId = props.movieDetails.imdbID;
	const [status, setStatus] = useState(false);
	const [click, setClick] = useState(false);
	let favouriteArray = localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : [];
	useEffect(() => {
		if (click){
			if (status === true) {
				addFavourite();
			} else if (favouriteArray.length !== 0) {
				removeFavourites();
			}
		}
	}, [status]);


	useEffect(() => {
		 if(!click){
			changeFillColor()
		 }	
	}, [movieId]);
	// function to check and modify status & favourite list on button click
	const handleStatusChange = () => {
		let demo = status;
		setClick(true);
		setStatus(!demo);

	};

	const getIndex = () => {
		for (let x = 0; x < favouriteArray.length; x++) {
			
			if (favouriteArray[x].imdbID === movieId) {
				console.log('x ', x);
				return { index: x, add: true };
			}
		}
		return {};
	};
	//function add favourite to favourite list
	const addFavourite = () => {
		if (favouriteArray) {
			favouriteArray.push(props.movieDetails);
			localStorage.setItem('favourites', JSON.stringify(favouriteArray));
		}
	};
	//function add favourite from movie favourites list
	const removeFavourites = () => {
		if (favouriteArray) {
			let index = getIndex().index;
			favouriteArray.splice(index, 1);
			localStorage.setItem('favourites', JSON.stringify(favouriteArray));
		}
	};

	const changeFillColor = () => {
		if (getIndex().add){
			setStatus(true)
		}
	}

	return (
		<FavoriteIcon
			onClick={handleStatusChange}
			className={`${classes.favouriteBtn} ${status ? classes.addFavourite : ''}`}
		></FavoriteIcon>
	);
};

export default AddFavourites;
