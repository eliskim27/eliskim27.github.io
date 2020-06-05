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
                    text={["I'm Eli", "I'm a web developer"]} 
                    speed={100} 
                    eraseDelay={700}
                />
                <Social />
            </div>
        )
    }
}
    
export default Home