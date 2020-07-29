import React, { Component } from 'react'

class WorkCard extends Component {

    const bullets = {this.props.description.map(bullet => 
        <li>bullet</li> 
    )}
    
    render() {
        return (
            <div className="widecard">
                <div className="compdet">
                    <h2>{this.props.title}</h2>
                    <h4 className="secondtext">{this.props.company}</h4>
                    <h4 className="secondtext">{this.props.startDate} - {this.props.endDate}</h4>
                    <ul>{bullets}</ul>
                 
                </div>
            </div>
        )
    }
}

export default WorkCard