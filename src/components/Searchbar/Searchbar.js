import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
const watchTypes = [
  {
    value: '',
    label: 'All',
  },
  {
    value: 'movies',
    label: 'Movies',
  },
  {
    value: 'series',
    label: 'Series',
  },
  {
    value: 'episodes',
    label: 'Episodes',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        outline:'none'
    //   margin: theme.spacing(1),
    //   width: '25ch',
    },
  },
}));

const Searchbar=()=> {
  const classes = useStyles();
  const [type, setType] = React.useState('');
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const handleSearchChange =(event)=>{
    let url = `http://www.omdbapi.com/?apikey=65ec2d05&s=${event.target.value}&type=${type}&page='2'`;
    axios.get(url).then((response)=>{
console.log(response);
    }).catch((response)=>{

    })
  }
  return (
    <form className={classes.root} noValidate autoComplete="off">
        <TextField onChange={handleSearchChange}></TextField>
        <TextField
          id="outlined-select-type-native"
          select
          value={type}
          onChange={handleTypeChange}
          SelectProps={{
            native: true,
          }}
        >
          {watchTypes.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <Button variant="contained" color="secondary">
  Search
</Button>
    </form>
  );
}
 export default Searchbar;