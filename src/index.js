import React from 'react'
import ReactDOM from 'react-dom'
import SocketIOClient from 'socket.io-client'
import { CssBaseline } from '@material-ui/core';

import Main from './components/Main'

class App extends React.Component{
	constructor(){
		super()
		this.socket = SocketIOClient('http://localhost:3000')
		this.state = {
			log : []
		}
	}

	componentDidMount = () => {
		this.socket.on('data', data => {
			this.setState({
				log : this.state.log.concat(data.replace(/\s+$/, ''))
			})
		})
	}

	render(){
		return(
			<React.Fragment>
				<CssBaseline />
				<Main log={this.state.log}/>
			</React.Fragment>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))