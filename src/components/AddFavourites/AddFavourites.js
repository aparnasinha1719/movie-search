import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

import classes from './AddFavourites.module.css';
const AddFavourites = (props) => {
	let movieId = props.movieDetails.imdbID;
	const [status, setStatus] = useState(false);
	const [statusArray,setStatusArray]=useState()
	let favouriteArray = localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : [];
	console.log(status);
	useEffect(() => {
		// localStorage.clear('favourites')
		// console.log(favouriteArray);

		if (status === true) {
			addFavourite();
		} else if(favouriteArray.length!==0){
			removeFavourites();
		}
	}, [status]);
	// function to check and modify status & favourite list on button click
	const handleStatusChange = () => {
		let demo = status;
		setStatus(!demo);
		console.log(status);
	};
	const getIndex = () => {
		for (let x = 0; x < favouriteArray.length; x++) {
			if (favouriteArray[x].imdbID === movieId) {
				return x;
			}
		}
	};
	//function add favourite to favourite list
	const addFavourite = () => {

		if (favouriteArray) {
			favouriteArray.push(props.movieDetails);
			localStorage.setItem('favourites', JSON.stringify(favouriteArray));
		console.log('add',JSON.parse(localStorage.getItem('favourites')));

		}
	};
	//function add favourite from movie favourites list
	const removeFavourites = () => {
		if (favouriteArray) {
			let index=getIndex();
			favouriteArray.splice(index, 1);
			localStorage.setItem('favourites', JSON.stringify(favouriteArray));
		console.log('remove',JSON.parse(localStorage.getItem('favourites')));

		}
	};
	return (
		<FavoriteIcon
			onClick={handleStatusChange}
			className={`${classes.favouriteBtn} ${status? classes.addFavourite : ''}`}
		></FavoriteIcon>
	);
};

export default AddFavourites;
