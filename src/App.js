import React, { Component } from 'react'
import './App.css'

// controlled and uncontrolled inputs
// JS
// const input = document.getElementById('myText);
// const inputValue = input.value;
// React
// value, onChange

class Form extends Component {
    render() {
        return <h1>Hey from react</h1>
    }
}

export default class App extends Component {
    render() {
        return (
            <Form />
        )
    }
}
