import React from 'react'
import { TextField, InputAdornment } from '@material-ui/core';

class AxisInput extends React.Component{
	render(){
		return(
			<TextField InputProps={{
				startAdornment : <InputAdornment position='start'>{this.props.axis}:</InputAdornment>
			}} onChange={this.props.onChange} value={this.props.value}/>
		)
	}
}

export default AxisInput