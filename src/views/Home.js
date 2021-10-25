import React, { Component } from 'react'
import Button from '../components/Button'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <Button step ={1} incrementCount={this.props.handleClick}/>
                <Button step ={5} incrementCount={this.props.handleClick}/>
                <Button step ={10} incrementCount={this.props.handleClick}/>
                <Button step ={25} incrementCount={this.props.handleClick}/>
                <Button step ={100} incrementCount={this.props.handleClick}/>
                <h3>Count is at {this.props.count}</h3>
            </div>
        )
    }
}
