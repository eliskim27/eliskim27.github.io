import React, { Component } from 'react'

class WorkCard extends Component {
    
    render() {
        return (
            <div className="widecard">
                <div className="compdet">
                    <h2>{this.props.title}</h2>
                    <h4 className="secondtext">{this.props.schoolName} - ({this.props.location})</h4>
                    <h4 className="secondtext">{this.props.to}</h4>
                </div>
            </div>
        )
    }
}

export default WorkCard