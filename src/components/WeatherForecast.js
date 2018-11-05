import React, { Component } from 'react';
import {getWeatherForcast} from '../service/WeatherForcastService.js'

class WeatherForcast extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        self = this
        this.refreshWeatherForcast()
    }
    refreshWeatherForcast() {
        setWeatherForcast()
    }
    render() {
        if (this.state.weather) {
            return(
                <div>
                    <p>Temperature: {this.state.weather.currently.temperature}</p>
                    <p>Summary: {this.state.weather.currently.summary}</p>
                    <p>Humidity: {this.state.weather.currently.humidity}</p>
                    <p>pressure: {this.state.weather.currently.pressure}</p>
                    {this.renderButton()}
                </div>
            )
            
        }
        else return(<div>No weather data loaded</div>)
        
    }
    renderButton() {
        if (this.state.refreshing) {
            return <a target="_blank" style={{cursor:'pointer'}} className="App-link" onClick={this.refreshWeatherForcast}>Refreshing...</a>
        }
        else {
            return <a target="_blank" style={{cursor:'pointer'}} className="App-link" onClick={this.refreshWeatherForcast}>Refresh</a>
        }
    }
}

let self

const setWeatherForcast = async ()=> {
    self.setState({refreshing: true})
    let res = await getWeatherForcast()
    self.setState({refreshing: false})
    console.log(res)
    self.setState({weather: res})
}

export default WeatherForcast