import React from 'react'
import { Paper, Grid, Typography, Button, TextField } from '@material-ui/core';
import Api from './Api'

class Port extends React.Component{
	constructor(){
		super()
		this.state = {
			port : ''
		}
	}

	getPort = async () => {
		let response = await Api.get('/port')
		this.setState({
			port : response.data.name
		})
	}

	setPort = async () => {
		if(this.state.port.toString().trim() !== ''){
			Api.put('/port', {
				name : this.state.port
			})
		}
	}

	cyclePort = () => {
		Api.post('/port/cycle')
	}

	handleChange = (e) => {
		this.setState({
			port : e.target.value
		})
	}

	render(){
		return(
			<Paper>
				<Grid container={true} direction='column' className='buttonGroup' spacing={8}>
					<Grid item={true}>
						<Typography><strong>PORT</strong></Typography>
					</Grid>
					<Grid item={true}>
						<Button fullWidth={true} color='primary' size='small' variant='contained' onClick={this.getPort}>SHOW</Button>
					</Grid>
					<Grid item={true}>
						<TextField value={this.state.port} fullWidth={true} onChange={this.handleChange} InputProps={{style:{fontSize:'12px'}}}></TextField>
					</Grid>
					<Grid item={true}>
						<Button fullWidth={true} color='secondary' size='small' variant='contained' onClick={this.setPort}>SET</Button>
					</Grid>
					<Grid item={true}>
						<Button fullWidth={true} color='secondary' size='small' variant='contained' onClick={this.cyclePort}>CYCLE</Button>
					</Grid>
				</Grid>
			</Paper>
		)
	}
}

export default Port