import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MyComponent from './MyComponent.js'
import HomePage from './HomePage.js';

class Navigation extends Component {
    render() {
        return(
        <div>
            <div>
                <Route path="/about" component={MyComponent}/>
                <Route path="/home" component={HomePage}/>
            </div>
            {this.renderNavigation()} 
        </div>)
    }
    renderNavigation() {
        return(
            <div>
                <nav>
                    <Link to="/about">about</Link>
                </nav>
                <nav>
                    <Link to="/home">home</Link>
                </nav>
            </div>
        )
    }
  }

export default Navigation;