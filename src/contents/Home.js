import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/StephEliWedding-182.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img 
                    src={profilepic} 
                    className="profilepic"
                    alt="Welcome to Eli's Portfolio!">
                    </img>
                <ReactTypingEffect 
                    className="typingeffect" 
                    text={["Hello, I'm Eli!", "I'm a web developer"]} 
                    speed={70} 
                    eraseDelay={500}
                />
                <Social />
            </div>
        )
    }
}
    
export default Home