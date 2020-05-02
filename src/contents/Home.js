import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';

// PROFILE PICTURE
import profilepic from '../img/IMG-3708.JPG';

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic"></img>
                <ReactTypingEffect 
                    className="typingeffect"
                    
                    // HOME PAGE TEXT
                    text={['I am Eli Kim','I am a web developer']} 
                    speed={100} 
                    eraseDelay={700}
                />
            </div>
        )
    }
}

export default Home

