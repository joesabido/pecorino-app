import React from 'react'
import Axios from 'axios'
import { TextField, Button, CssBaseline } from '@material-ui/core';

const basepath = 'http://localhost:3000/api'

class Main extends React.Component{
	handleEnableMotors = async () => {
		await Axios.put(`${basepath}/motors/enabled`)
	}

	render(){
		return(
			<React.Fragment>
				<CssBaseline />
				<TextField helperText='Incoming!' multiline={true} rows={10} style={{width:'400px'}} value={this.props.log.join('\n')}/>
				<Button variant='contained' onClick={this.handleEnableMotors}>Enable Motors</Button>
			</React.Fragment>
		)
	}
}

export default Main