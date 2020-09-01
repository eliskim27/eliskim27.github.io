import React, { Component } from 'react';
import { Document } from 'react-pdf'
import resume from '../img/Eli Kim Resume.pdf'

class Resume extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Resume</h1>
                <Document
                    // file="../img/Eli Kim Resume.pdf"
                >

                </Document>
            </div>
        )
    }
}
    
export default Resume