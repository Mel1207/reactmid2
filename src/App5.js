import React, { Component } from 'react'
import './App.css'

// Uncontrolled inputs with reff

class Form extends Component {
    handleSubmit = e => {
        e.preventDefault()

        const name = this.refs.myName;
        const nameValue = name.value;

        const email = this.email.value;
       

        const text = this.refs.myText;
        text.style.color = 'red'

        console.log(email, nameValue, text)
    }

    render() {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="myName"/>
                    <input type="email" ref={(typeText) => {this.email = typeText }}/>
                    <button type="submit">Submit</button>
                    
                </form>
                <p ref="myText">this is p</p>
            </section>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <Form />
        )
    }
}
