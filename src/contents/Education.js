import React, { Component } from 'react';
import EduCard from '../components/EduCard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <EduCard 
                    title="Software Engineering Program" 
                    schoolName="Flatiron School" 
                    location="New York, NY"
                    to="2020"
                />
                <EduCard 
                    title="BA in Human Resource Management" 
                    schoolName="Rutgers University" 
                    location="New Brunswick, NJ"
                    to="2017"
                />
                <EduCard 
                    title="Military Police (31B)" 
                    schoolName="Army Basic Training / AIT" 
                    location="Ft. Leonard Wood, MO"
                    to="2013"
                />
            </div>
        )
    }
}
    
export default Education