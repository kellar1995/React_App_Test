import React, { Component } from 'react'
import Button from './components/Button'



export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  handleClick = (step) => {
    let newCount = this.state.count + step
    this.setState({
        count: newCount
    })
  }

  render() {
    return (
        <div className="container">
        <h1>Hello {this.props.name}</h1>
        <Button step ={1} incrementCount={this.handleClick}/>
        <Button step ={5} incrementCount={this.handleClick}/>
        <Button step ={10} incrementCount={this.handleClick}/>
        <Button step ={25} incrementCount={this.handleClick}/>
        <Button step ={100} incrementCount={this.handleClick}/>
        <h3>Count is at {this.state.count}</h3>
      </div>
    )
  }
}
