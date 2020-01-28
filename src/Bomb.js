// your Bomb code here!
import React, { Component } from 'react'

export class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }


    render() {
        return (
            <div>
            <p>{this.secondsLeft === 0}? 'Boom' : '{this.state.secondsLeft} before I go boom!'}</p>
            </div>
        )
    }
}

export default Bomb
