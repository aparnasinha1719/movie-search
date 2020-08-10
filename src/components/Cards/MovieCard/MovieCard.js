import React ,{useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AddFavourites from '../../AddFavourites/AddFavourites';
import axios from 'axios';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width:300,
    margin:'10px 20px',
    borderRadius:'9px',
    justifyContent:'space-between',
    boxShadow: '0px 3px 4px 1px rgba(0,0,0,0.06)',

    '& .MuiCardContent-root':{
      paddingTop: 26,
    }
  },
  heading:{
    fontSize:'1.25rem'
  },
  details: {
    flexGrow:1,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    fontSize:'0.7rem',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  link:{
    color:'slategray',
    '&:hover':{
      color:'rgb(220, 0, 78)'
    }
  }
}));

const MovieCard=(props)=> {
  // console.log(props.movie);

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=65ec2d05&i=${props.movieId}`)
  }, [])
  const classes = useStyles();
  return (
    <Card className={classes.root}>
    <AddFavourites movieDetails={props.movie}></AddFavourites>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Link className={classes.heading} to={{pathname:"/favourites/details",state:{
            id:props.movie.imdbID
          }}} >
            {props.movie.Title}
          </Link>
          <Typography variant="subtitle1" color="textSecondary">
            {props.movie.Year}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Link to={{pathname:"/favourites/details",state:{
            id:props.movie.imdbId
          }}} className={classes.link}>Details</Link>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.movie.Poster}
        title="Live from space album cover"
      />
    </Card>
  );
}
export default MovieCard; 