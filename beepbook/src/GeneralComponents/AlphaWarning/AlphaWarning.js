import React, { Component } from 'react';

import './AlphaWarning.css'

class AlphaWarning extends Component {
    render() {
        return (
            <div className="AlphaWarning">
                <h4>This is an Alpha version! BeepBook is still in development and the essentials are still being nailed down</h4>
                <p>Some features may be broken, the site may look bad, etc. At this time, this is the only version available.</p>
            </div>    
        );
    }
}

export default AlphaWarning;