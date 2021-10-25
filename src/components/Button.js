import React, { Component } from 'react'

export default class Button extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //       count: 0
    //     }
    //   }

    // handleClick = () => {
    //     let newCount = this.state.count +1
    //     this.setState({
    //         count: newCount
    //     })
    // }
    
    render() {
        return (
            <div>
                <button className="btn btn-success mb-2" onClick={() => this.props.incrementCount(this.props.step)}>+{this.props.step}</button>
            </div>
        )
    }
}
