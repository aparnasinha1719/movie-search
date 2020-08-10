import React from 'react'
import MovieCard from '../MovieCard/MovieCard';
import classes from './CardWrapper.module.css';
const CardWrapper=(props)=>{

    return (
        <div className={classes.CardWrapper}>
        {props.moviesList.map((value,key)=>(
            <MovieCard movie={value} key={key}></MovieCard>
        ))}
        </div>
    )
}

export default CardWrapper
