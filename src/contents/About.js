import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">About Me (this page needs to be overhauled)</h1>
                <h4>Hi there,</h4>
                <h1>I'm Eli</h1>
                <h3>Software <u>Engineer</u> | Army <u>Veteran</u></h3>
                <br></br>
                <p>
                    I am a software engineer, experienced in JavaScript-based programming, React, and Ruby on Rails. Military service in the US Army forged critical values in work ethic, adaptability, team-building, and completion of the mission. Driven by the creative, problem-solving aspect of developing, and is seeking to apply military and sales expertise to achieve results and pursue mastery. 
                </p>
                <p>
                    add:
                    resume component, 
                    button to download resume, 
                    button to email me,
                    work history,

                    to do:
                    fix left side nav bar to be responsive
                    scrolling site
                </p>
            </div>
        )
    }
}
    
export default About