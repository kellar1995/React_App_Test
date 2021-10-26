import React, { Component } from 'react'
import UserDetail from '../components/UserDetail'

export default class Kekambas extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
            .then(res => res.json())
            .then(data => this.setState({
                users: data
    }))
}
    render() {
        return (
            <div>
                This is the users page.
                {this.state.users.map((x,u) => <UserDetail key = {x} user={u} />)}
            </div>
        )
    }
}
