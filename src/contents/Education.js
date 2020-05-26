import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render () {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard 
                    title="Fullstack Software Engineering" 
                    where="Flatiron School" 
                    from="sometime" 
                    to="sometime"/>
                <Widecard 
                    title="BA in Human Resources Management" 
                    where="Rutgers University" 
                    from="sometime" 
                    to="sometime"/>
            </div>      
        )
    }
}

export default Education