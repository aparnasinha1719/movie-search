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
		value: 'movie',
		label: 'Movies',
	},
	{
		value: 'series',
		label: 'Series',
	},
	{
		value: 'episode',
		label: 'Episodes',
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			//   margin: theme.spacing(1),
			//   width: '25ch',
		},
		'& .MuiSelect-root': {
			padding: 16,
			background: 'lightgrey',
			borderRadius: '0 30px 30px 0',
		},
		'& .MuiInput-underline': {
			'&:before': {
				borderBottom: 'none',
			},
			'&:hover:not($disabled):before': {
				borderBottom: 'none',
			},
			'&:after': {
				borderBottom: 'none',
			},
		},
	},
	searchbarText: {
    flex:1,
    padding: '10px 10px 9px 16px'

	},
	searchbar: {
		background: '#d3d3d330',
		border: '1px solid #d3d3d391',
		borderRadius: '30px',
		width: '50%',
		display: 'flex',
		margin: '0 auto',
		justifyContent: 'space-between',
  },
  searchBtn:{
    margin: '16px',
    width: '20%',
    background:'#799d4b',
    minWidth: '70px',
    color:'white',
    '&:hover':{
      background:'#6f8e48'
    }
  }
}));

const Searchbar = (props) => {
	const classes = useStyles();
  const [type, setType] = React.useState('');
  const [filterText, setFilterText] = React.useState('');
	const handleTypeChange = (event) => {
		setType(event.target.value);
	};
	const handleSearchChange = (value) => {
    setFilterText(value);
		let url = `http://www.omdbapi.com/?apikey=65ec2d05&s=${value}&type=${type}&page='2'`;
		axios
			.get(url)
			.then((response) => {
				// console.log(response);
				if(response.data.Search){
					props.getMovies(response.data.Search);

				}
			})
			.catch((response) => {});
	};
	return (
		<form className={classes.root} noValidate autoComplete="off">
			<div className={classes.searchbar}>
				<TextField placeholder="Search..."
				 className={classes.searchbarText}
				 onChange={($event)=>handleSearchChange($event.target.value)}>
				 </TextField>
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
						<option key={option.value} value={option.value} className={classes.selectOption}>
							{option.label}
						</option>
					))}
				</TextField>
			</div>
			<Button variant="contained"  className={classes.searchBtn} 
      onClick={()=>handleSearchChange(filterText)}>
				Search
			</Button>
		</form>
	);
};
export default Searchbar;
