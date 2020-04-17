
import React, { Component } from 'react'
import User from './User'

export class Users extends Component {
    state = {
        users : [
            {name : "abc", age:'10'},
            {name : "xyz", age:'20'},
            {name : "asd", age:'30'}
        ],
        title:"User's list"
    }

    makeMeYoung = () => {
        const newState = this.state.users.map((user) => {
            const tempUser = user
            tempUser.age -= 5;
            return tempUser
        })
        this.setState({newState});
    }
    render() {
        return (
            <div>
                <button onClick={this.makeMeYoung}>Make us younger</button>
                <h1>{this.state.title}</h1>
                <br/>
                {
                    this.state.users.map((user) => {
                    return <User age={user.age}>{user.name}</User>
                    })
                }
            </div>
        )
    }
}

export default Users
