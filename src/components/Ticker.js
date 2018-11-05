import React, { Component } from 'react';

class Ticker extends Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date(), run: true}
        self = this
        init()
    }

    start() {
        init()
    }

    stop() {
        stop()
    }

    render() {
        if (this.state.run) {
            return (
                <div>
                    <p> {this.state.date.toISOString()} <a target="_blank" style={{cursor:'pointer'}} className="App-link" onClick={this.stop}> stop </a></p> 
                </div>
            )
        }
        else {
            return (
                <div>
                    <p> {this.state.date.toISOString()} <a target="_blank" style={{cursor:'pointer'}} className="App-link" onClick={this.start}> start </a></p> 
                </div>
            )
        }
    }
}

let self
let interval

const init = ()=>{ 
    interval = setInterval(setTime, 1)
    self.setState({run: true})
}

const stop = ()=>{
    clearInterval(interval)
    self.setState({run: false})
}

const setTime = ()=>{
    self.setState({date: new Date()})
}

export default Ticker