import React, { Component } from 'react';

class Frame extends Component {

    render() {
        return(
            <iframe src="http://www.google.com">
                <p>Your browser does not support iframes.</p>
            </iframe>
        ) 
        
    }

}

export default Frame;