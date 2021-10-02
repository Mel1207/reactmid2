import React, { Component } from 'react'
import './App.css'

// controlled inputs 'use case'

class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        people: []
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        const firstName = this.state.firstName
        const lastName = this.state.lastName

        console.log(firstName, lastName)

        if(firstName.length > 0 && lastName.length > 0) {
            const person = `${firstName} ${lastName} `;
            this.setState({
                people:[...this.state.people, person],
                firstName: "",
                lastName: ""
            })
        } else {
            alert('please fill all fields')
        }
    };

    render() {
        return (
            <section>
                <article>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                        <button type="submit">Submit</button>
                    </form>
                </article>
                <article>
                    <h1>People</h1>
                    <ul>
                        <li>{this.state.people}</li>
                    </ul>
                    {/* <div>{this.state.people}</div> */}

                </article>
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
