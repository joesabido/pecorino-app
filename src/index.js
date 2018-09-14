import React from 'react'
import ReactDOM from 'react-dom'

import { CssBaseline } from '@material-ui/core';

import Main from './components/Main'

class App extends React.Component{
	render(){
		return(
			<React.Fragment>
				<CssBaseline />
				<Main />
			</React.Fragment>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))