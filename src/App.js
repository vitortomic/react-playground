import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Ticker.js'
import Ticker from './components/Ticker.js';
import WeatherForcast from './components/WeatherForecast.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Ticker/>
          <WeatherForcast/>
        </header>
      </div>
    );
  }
}

export default App;
