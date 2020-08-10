import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

import classes from './AddFavourites.module.css';
const AddFavourites = (props) => {
	const [status, setStatus] = useState(false);
	let favouriteArray = localStorage.getItem('favourites')?JSON.parse(localStorage.getItem('favourites')):[];
	useEffect(() => {
		localStorage.clear('favourites')
		if (status === true) {

			addFavourite();
		} else {
			removeFavourites()
		}
    }, [status]);
	// function to check and modify status & favourite list on button click
	const handleStatusChange = () => {
		let demo = status;
        setStatus(!demo);
        // console.log(status);

	};
	//function add favourite to favourite list
	const addFavourite = () => {
        if (favouriteArray) {
		favouriteArray.push(props.movieDetails);
		console.log(favouriteArray);
        localStorage.setItem('favourites', JSON.stringify(favouriteArray));
        }
	};
	//function add favourite from movie favourites list
	const removeFavourites = () => {
		let favouriteArray = JSON.parse(localStorage.getItem('favourites'));
		if (favouriteArray) {
		console.log(favouriteArray);

			favouriteArray.splice(favouriteArray.indexOf(props.movieDetails), 1);
		}
	};
	return <FavoriteIcon onClick={handleStatusChange} className={`${classes.favouriteBtn} ${status?classes.addFavourite:''}` }></FavoriteIcon>;
};

export default AddFavourites;
