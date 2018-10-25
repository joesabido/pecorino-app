import React from 'react'
import { Paper, Grid, Typography, Button, TextField } from '@material-ui/core';
import Api from './Api'
import AxisInput from './AxisInput'

class Position extends React.Component{
	constructor(){
		super()
		this.state = {
			positionX : '',
			positionY : '',
			positionZ : '',
			speed : 6000			
		}
	}

	getHomeStatus = () => {
		Api.get('/position/home')
	}

	goHome = () => {
		Api.put('/position/home')
	}

	setHome = () => {
		Api.post('/position/home')
	}

	getPositionStatus = () => {
		Api.get('/position')
	}

	goToPosition = () => {
		let position = {}

		if(this.state.positionX){
			position['x'] = parseFloat(this.state.positionX)
		}

		if(this.state.positionY){
			position['y'] = parseFloat(this.state.positionY)
		}

		if(this.state.positionZ){
			position['z'] = parseFloat(this.state.positionZ)
		}

		if(this.state.speed){
			position['speed'] = parseFloat(this.state.speed)
		}

		Api.put('/position', position)
	}

	halt = () => {
		Api.put('/position/halt')
	}

	handleChangeAxis = (e, axis) => {
		this.setState({
			[axis] : e.target.value.toString().trim()
		})
	}

	render(){
		return(
			<Paper>
				<Grid container={true} direction='column' className='buttonGroup' spacing={8}>
					<Grid item={true}>
						<Typography><strong>POSITION</strong></Typography>
					</Grid>
					<Grid item={true}>
						<Button fullWidth={true} color='primary' size='small' variant='contained' onClick={this.getHomeStatus}>HOME STATUS</Button>
					</Grid>
					<Grid item={true}>
						<Button fullWidth={true} color='primary' size='small' variant='contained' onClick={this.goHome}>SET AS HOME</Button>
					</Grid>
					<Grid item={true}>
						<Button fullWidth={true} color='primary' size='small' variant='contained' onClick={this.goHome}>GO HOME</Button>
					</Grid>
					<Grid item={true}>
						<Button fullWidth={true} color='primary' size='small' variant='contained' onClick={this.getPositionStatus}>POSITION STATUS</Button>
					</Grid>
					<Grid item={true}>
						<AxisInput axis='X' value={this.state.positionX} onChange={e=>this.handleChangeAxis(e, 'positionX')}/>
						<AxisInput axis='Y' value={this.state.positionY} onChange={e=>this.handleChangeAxis(e, 'positionY')}/>
						<AxisInput axis='Z' value={this.state.positionZ} onChange={e=>this.handleChangeAxis(e, 'positionZ')}/>
						<AxisInput axis='SPD' value={this.state.speed} onChange={e=>this.handleChangeAxis(e, 'speed')}/>
					</Grid>
					<Grid item={true}>
						<Button fullWidth={true} color='primary' size='small' variant='contained' onClick={this.goToPosition}>GO TO POSITION</Button>
					</Grid>
					<Grid item={true}>
						<Button fullWidth={true} color='primary' size='small' variant='contained' onClick={this.halt}>HALT/RESET</Button>
					</Grid>
				</Grid>
			</Paper>
		)
	}
}

export default Position