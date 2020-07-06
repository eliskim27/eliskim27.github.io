import React, { Component } from 'react'

class Widecard extends Component {
    
    render() {
        return (
            <div className="widecard">
                <div className="compdet">
                    <h3>{this.props.title}</h3>
                    <h4 className="secondtext">{this.props.schoolName}</h4>
                    <h4 className="secondtext">{this.props.to}</h4>
                </div>
            </div>
        )
    }
}

export default Widecard