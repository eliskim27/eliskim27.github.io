import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard 
                    title="Software Engineering Program" 
                    schoolName="Flatiron School" 
                    to="2020"
                />
                <Widecard 
                    title="BA in Human Resource Management" 
                    schoolName="Rutgers University" 
                    to="2017"
                />
                <Widecard 
                    title="31B - Military Police" 
                    schoolName="Army Basic Training / AIT" 
                    to="2013"
                />
            </div>
        )
    }
}
    
export default Education