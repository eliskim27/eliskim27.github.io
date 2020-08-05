import React, { Component } from 'react'

class WorkCard extends Component {


    
    render() {
        return (
            <div className="widecard">
                <div className="compdet">
                    <h2>{this.props.title}</h2>
                    <h4 className="secondtext">{this.props.company}</h4>
                    <h4 className="secondtext">{this.props.startDate} - {this.props.endDate}</h4>
                    {console.log(this.props.description)}
                    <h6>{this.props.description}</h6>
                 
                </div>
            </div>
        )
    }
}

export default WorkCard