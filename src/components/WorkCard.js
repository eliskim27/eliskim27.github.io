import React, { Component } from 'react'

class WorkCard extends Component {


    
    render() {
        return (
            <div className="widecard">
                <div className="compdet">
                    <h2>{this.props.title}</h2>
                    <h4 className="secondtext">{this.props.company}</h4>
                    <h4 className="secondtext">{this.props.startDate} - {this.props.endDate}</h4>
                    <div className="bullets">
                        <ul>
                            {this.props.description.map(function(bullet, index){
                                return (<li key={index}>{bullet}</li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkCard