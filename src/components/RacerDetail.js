import React, { Component } from 'react'

export default class RacerDetail extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.racer.Driver.givenName} {this.props.racer.Driver.familyName}</h4>
            </div>
        )
    }
}
