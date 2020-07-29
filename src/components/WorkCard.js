import React, { Component } from 'react'

class WorkCard extends Component {
    
    render() {
        return (
            <div className="widecard">
                <div className="compdet">
                    <h2>{this.props.title}</h2>
                    <h4 className="secondtext">{this.props.company}</h4>
                    <h4 className="secondtext">{this.props.startDate} - {this.props.endDate}</h4>
                    <ul>
                        {this.props.description}.forEach(element => {
                            <li>element</li>
                        });
                    </ul>
                </div>
            </div>
        )
    }
}

export default WorkCard