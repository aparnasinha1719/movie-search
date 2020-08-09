import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const type = [
  {
    value: 'all',
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
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <TextField ></TextField>
        <TextField
          id="outlined-select-type-native"
          select
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
        >
          {type.map((option) => (
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