import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import HomePage from './components/HomePage.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <HomePage/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
