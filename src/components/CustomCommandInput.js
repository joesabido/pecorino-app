import React from 'react'
import {Typography} from '@material-ui/core'
import Api from './Api'

class CustomCommandInput extends React.Component{
    constructor(){
        super()
        this.state = {
            value : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            value : e.target.value
        })
    }

    handleKeyUp = (e) => {
        
        switch(e.key){
            case 'Enter':
                this.sendCommand(this.state.value)
                break

            case 'Escape':
                this.setState({value : ''})
                break
        }
    }

    sendCommand = (command) => {
        if(command === undefined){
            return
        }

        command = command.toString().trim()

        if(command !== ''){
            Api.post('/commands', {
                command : command
            })
        }
    }

    render(){
        return(
            <React.Fragment>
                <p><Typography variant='caption'>Command:</Typography></p>
				<input type='text' value={this.state.value} size={50} onChange={this.handleChange} onKeyUp={this.handleKeyUp} autoFocus={true}></input>
            </React.Fragment>
        )
    }
}

export default CustomCommandInput