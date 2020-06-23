import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/StephEliWedding-182.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <h1 className="typingeffect" >Hi, I'm Eli.</h1>
                <img 
                    src={profilepic} 
                    className="profilepic"
                    alt="Welcome to Eli's Portfolio!">
                    </img>
                <div>
                    <ReactTypingEffect
                        className="typingeffect" 
                        text={["I'm "]} 
                        speed={70} 
                        eraseDelay={100000000000}
                        cursor={String}
                    />
                    <ReactTypingEffect 
                        className="typingeffect" 
                        text={[
                            " a software engineer!",
                            " a progammer!",
                            " a lifelong learner!",
                            " eager to meet you!"
                        ]} 
                        speed={70} 
                        eraseDelay={10}
                    />
                </div>
                <Social />
            </div>
        )
    }
}
    
export default Home