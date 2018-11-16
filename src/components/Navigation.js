import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MyComponent from './MyComponent.js'

class Navigation extends Component {
    render() {
        return(
        <div>
            {this.renderAbout()} 
            <div>
                <Route path="/about" component={MyComponent}/>
            </div>
        </div>)
    }
    renderAbout() {
        if(window.location.pathname != "/about") {
            return( 
                <nav>
                    <Link to="/about">about</Link>
                </nav>
            )
        }
        else {
            return(
            <nav>
                <Link to="/">home</Link>
            </nav>)
        }
    
    }
  }

export default Navigation;




