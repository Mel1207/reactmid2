import React, { Component } from 'react'
import './App.css'

const Person = ({img, name, age}) => {
  return(
    <article>
      <img src={img} alt="Image" />
      <h4>name: {name}</h4>
      <h5>age: {age}</h5>
    </article>
  )
}


class PersonList extends Component {
  state = {
    people: [
      {
        id: 1, 
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        name: "Mel",
        age: 26
      },
      {
        id: 2, 
        img: "https://randomuser.me/api/portraits/thumb/men/22.jpg",
        name: "John",
        age: 28
      }
    ]
  }

  render() {
    return (
      <section>
        {this.state.people.map((person) => (
          <Person key={person.id} img={person.img} name={person.name} age={person.age} />
        ))}
      </section>
    )
  }
}


export default class App extends Component {
  render() {
    return (
      <div>
        <h2>hey hey hey</h2>
        <p>this is nesw</p>
        <PersonList />
      </div>
    )
  }
}
