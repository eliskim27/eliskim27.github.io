import React, { Component } from 'react';
import { Document } from 'react-pdf'
import resume from '../img/Eli Kim Resume.pdf'

class Resume extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Resume</h1>
                <Document
                    file="https://drive.google.com/file/d/1RyUGXk5Q9ACYKXa6EAawmA1qTHGPh95j/view?usp=sharing"
                />

            </div>
        )
    }
}
    
export default Resume