import React from 'react'
import ReactDOM from 'react-dom'
import SocketIOClient from 'socket.io-client'
import { CssBaseline } from '@material-ui/core';

import Main from './components/Main'

import './styles.css'

class App extends React.Component{
	constructor(){
		super()
		this.socket = SocketIOClient('http://localhost:3000')
	}

	componentDidMount = () => {
		this.socket.on('data', data => {
			this.mainComponent.log(data.replace(/\s+$/, ''))
		})
	}

	render(){
		return(
			<React.Fragment>
				<CssBaseline />
				<Main ref={element=>{this.mainComponent=element}}/>
			</React.Fragment>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))