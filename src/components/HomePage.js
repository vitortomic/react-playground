import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import './Ticker.js'
import Ticker from './Ticker.js';
import WeatherForcast from './WeatherForecast.js'
import Navigation from './Navigation.js';

class HomePage extends Component {
    render() {
      return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Ticker/>
            <WeatherForcast/>
            <Navigation/>
        </header>
      );
    }
  }

export default HomePage;