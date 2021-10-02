import React, { Component } from 'react'
import './App.css'

// React Fragment
// and this.setState
// asynchronous
// functional this.setState()

class Counter extends Component {
    state = {
        count: 0
    }

    handleIncrease = () => {
        console.log('called first:',  this.state.count)
        this.setState({
            count: this.state.count + 1
        })
        console.log('called second:',  this.state.count)
    }

    handleDecrease = () => {
        // this.setState({
        //     count: this.state.count - 1
        // })
        this.setState((state, propps) => {
            return { count: state.count - propps.amount}
        })
    }

    render() {
        return (
            <>
                <div className="counterdiv">
                    <button type="button" onClick={this.handleIncrease}>Increase</button>
                    <span>Count: {this.state.count}</span>
                    <button type="button" onClick={this.handleDecrease}>Decrease</button>
                </div>
            </>
        )
    }

}

export default class App extends Component {
    render() {
        return (
            <Counter amount="2"/>
        )
    }
}
