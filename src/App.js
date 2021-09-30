import React, { Component } from 'react'
import './App.css'
import PropTypes from 'prop-types'

const Person = ({img, name, age, info}) => {
  return(
    <article>
      <img src={img} alt="Image" />
      <h4>name: {name}</h4>
      <h5>age: {age}</h5>
      <p>info: {info}</p>
    </article>
  )
}

// isRequired and isDefault
Person.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}
Person.defaultProps = {
  img: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
  name: 'James Doe',
  age: 30,
  info: 'this is default info'
}


class PersonList extends Component {
  state = {
    people: [
      {
        id: 1, 
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        name: "Mel",
        // age: 26
      },
      {
        id: 2, 
        // img: "https://randomuser.me/api/portraits/thumb/men/22.jpg",
        name: "John",
        age: 28
      },
      {
        id: 3, 
        img: "https://randomuser.me/api/portraits/thumb/men/23.jpg",
        name: "Doe",
        age: 28,
        info: "some info about me"
      }
    ]
  }

  render() {
    return (
      <section>
        {this.state.people.map((person) => (
          <Person 
            key={person.id} 
            img={person.img} 
            name={person.name} 
            age={person.age} 
            info={person.info}
          />
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
