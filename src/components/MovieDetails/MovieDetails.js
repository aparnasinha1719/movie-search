import React,{useEffect,useState} from 'react'
import Card from '@material-ui/core/Card';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { CardContent } from '@material-ui/core';
import ContentDisplay from '../ContentDisplay/ContentDisplay';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
const useStyles = makeStyles((theme) => ({
    root: {
      width:'60%',
      margin:'0 auto',
     ' & .MuiCardHeader-content':{
            textAlign:'left',
            fontSize:'2rem'
      },
      ' & .MuiCardHeader-title':{
        fontSize:'2rem'
  }
    },
    avatar:{
    height: '100px',
    width: '100px',
    borderRadius: '9px',
    }
  }));

const MovieDetails=(props)=> {
    const [movieData,setMovieData]=useState({});
    const classes = useStyles();
    useEffect(() => {
        let url = `http://www.omdbapi.com/?apikey=65ec2d05&i=${props.location.state.id}`;
        axios.get(url).then((response)=>{
            console.log(response.data);
                setMovieData(response.data);
        }).catch(err=>err)
    }, [])
    return (
       <Card className={classes.root}>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={movieData.Poster}>
          </Avatar>
        }
        title={movieData.Title}
      />
            <CardContent>
                <ContentDisplay data={movieData.Title}>Title</ContentDisplay>
                <ContentDisplay data={movieData.Genre}>Genre</ContentDisplay>
                <ContentDisplay data={movieData.Runtime}>Runtime</ContentDisplay>
                <ContentDisplay data={movieData.Released}>Released On</ContentDisplay>
                <ContentDisplay data={movieData.imdbRating}>IMDB Rating</ContentDisplay>
                <ContentDisplay data={movieData.Language}>Language</ContentDisplay>
                <ContentDisplay data={movieData.Country}>Country</ContentDisplay>
                <ContentDisplay data={movieData.Director}>Director</ContentDisplay>
                <ContentDisplay data={movieData.Production}>Production</ContentDisplay>
                <ContentDisplay data={movieData.Writer}>Writer</ContentDisplay>
                <ContentDisplay data={movieData.Actors}>Actors</ContentDisplay>
                <ContentDisplay data={movieData.Plot}>Plot</ContentDisplay>
            </CardContent>
       </Card>
    )
}

export default MovieDetails
