import React from 'react'
import { Paper, Grid, Typography, Button } from '@material-ui/core';
import Api from './Api'

class Motors extends React.Component{
	enableMotors = async () => {
		Api.put('/motors/enabled')
	}

	disableMotors = async () => {
		Api.delete('/motors/enabled')
	}

	render(){
		return(
			<Paper>
				<Grid container={true} direction='column' className='buttonGroup' spacing={8}>
					<Grid item={true}>
						<Typography><strong>MOTORS</strong></Typography>
					</Grid>
					<Grid item={true}>
						<Button fullWidth={true} color='primary' size='small' variant='contained' onClick={this.enableMotors}>ENABLE</Button>
					</Grid>
					<Grid item={true}>
						<Button fullWidth={true} color='secondary' size='small' variant='contained' onClick={this.disableMotors}>DISABLE</Button>
					</Grid>
				</Grid>
			</Paper>
		)
	}
}

export default Motors