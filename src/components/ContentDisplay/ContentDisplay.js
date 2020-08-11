import React from 'react';

import Grid from '@material-ui/core/Grid';
const ContentDisplay = (props) => {
	return (
		<Grid container spacing={3}>
			<Grid item>{props.children}</Grid>
			<Grid item>{props.data}</Grid>
		</Grid>
	);
};

export default ContentDisplay;
