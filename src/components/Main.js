import React from 'react'
import { Paper, Grid, Typography, Button } from '@material-ui/core';

import Motors from './Motors'
import Pins from './Pins'
import Port from './Port'
import Position from './Position'

global.basepath = 'http://localhost:3000/api'

class Main extends React.Component{
	constructor(){
		super()
		this.state = {
			log : []
		}
	}

	log = (message) => {
		this.setState({
			log : this.state.log.concat(message)
		}, ()=>{
			this.logTextarea.scrollTop = this.logTextarea.scrollHeight
		})
	}

	clearLog = () => {
		this.setState({
			log : []
		})
	}

	render(){
		return(
			<React.Fragment>
				<Paper className='buttonGroup'>
					<Grid container={true} direction='row' spacing={8}>
						<Grid item={true} md={3}>
							<Motors />
						</Grid>
						<Grid item={true} md={3}>
							<Pins />
						</Grid>
						<Grid item={true} md={3}>
							<Port />
						</Grid>
						<Grid item={true} md={3}>
							<Position />
						</Grid>
					</Grid>
					<p><Typography variant='caption'>Log:</Typography></p>
					<textarea ref={textarea=>this.logTextarea=textarea} rows={10} style={{width:'100%', resize:'none', fontFamily:'monospace'}} value={this.state.log.join('\n')} readOnly={true}></textarea>
					<Grid container={true} justify='flex-end'>
						<Button size='small' variant='contained' color='secondary' onClick={this.clearLog}>Clear</Button>
					</Grid>
				</Paper>
			</React.Fragment>
		)
	}
}

export default Main