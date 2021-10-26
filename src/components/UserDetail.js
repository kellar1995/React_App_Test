import React, { Component } from 'react'

export default class UserDetail extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.first_name} {this.props.last_name}</h4>
            </div>
        )
    }
}
