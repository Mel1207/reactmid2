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
        return <section>
            <article>
                <form>
                    <input type="text" name="firstName"/>
                    <input type="text" name="lastName"/>
                    <button type="submit">Submit</button>
                </form>
            </article>
            <article>
                <h1>People</h1>
                <div></div>

            </article>
        </section>
    }
}

export default class App extends Component {
    render() {
        return (
            <Form />
        )
    }
}
