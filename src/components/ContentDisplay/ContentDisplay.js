import React from 'react';

import Grid from '@material-ui/core/Grid';
const ContentDisplay = (props) => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={3} style={{textAlign:'left'}}>{props.children}</Grid>
			<Grid item xs={9} style={{textAlign:'left'}}><span style={{marginRight:8}}>:</span>  {props.data}</Grid>
		</Grid>
	);
};

export default ContentDisplay;
