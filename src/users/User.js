import React from 'react'

export default function User(props) {
    return (
        <div>
          name = {props.children}, age = {props.age}
        </div>
    )
}