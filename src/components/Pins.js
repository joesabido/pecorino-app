import React from 'react'
import { Paper, Grid, Typography, Button } from '@material-ui/core';
import Api from './Api'

class Pins extends React.Component{
	getStatus = async () => {
		Api.get('/status/pins')
	}

	render(){
		return(
			<Paper>
				<Grid container={true} direction='column' className='buttonGroup' spacing={8}>
					<Grid item={true}>
						<Typography><strong>PINS</strong></Typography>
					</Grid>
					<Grid item={true}>
						<Button fullWidth={true} color='primary' size='small' variant='contained' onClick={this.getStatus}>GET STATUS</Button>
					</Grid>
				</Grid>
			</Paper>
		)
	}
}

export default Pins