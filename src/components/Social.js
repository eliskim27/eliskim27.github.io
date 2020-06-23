import React, { Component } from 'react';
import gitIcon from '../img/icons8-github-50.png';
import linkedinIcon from '../img/icons8-linkedin-50-2.png';
import mediumIcon from '../img/icons8-medium-monogram-50.png';

class Social extends Component {
    render() {
        return (
            <div className="social">
                <a href="https://github.com/eliskim27" target="_blank" rel="noopener noreferrer">
                    <img src={gitIcon} alt="github"/>
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://Linkedin.com/in/eli-kim-97b719bb" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="github"/>
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://medium.com/@eliskim27" target="_blank" rel="noopener noreferrer">
                    <img src={mediumIcon} alt="github"/>
                    <i className="fab fa-medium-m"></i>
                </a>
                
                {/* <a href="https://codepen.io/" target="_blank"><i className="fab fa-codepen"></i></a> */}
                {/* <a href="https://Instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a> */}
                {/* <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a> */}
            </div>
        )
    }
}

export default Social
