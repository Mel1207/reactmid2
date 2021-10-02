// import React, { Component } from 'react'
// import './App.css'
// import PropTypes from 'prop-types'

// const Person = ({ person:{img, name, age, info} }) => {
//   // const {img, name, age, info} = props.person

//   return(
//     <article>
//       <img src={img} alt="Image" />
//       <h4>name: {name}</h4>
//       <h5>age: {age}</h5>
//       {/* dirty solution for default */}
//       {/* <p>info: {info || 'default info bout the person'}</p> */}
//       <p>info: {info || 'default info bout the person'}</p>
//     </article>
//   )
// }

// // isRequired and isDefault
// // object with particular shape
// Person.propTypes = {
//   person:PropTypes.shape({
//     img: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired
//   })
//   // img: PropTypes.string.isRequired,
//   // name: PropTypes.string.isRequired,
//   // age: PropTypes.number.isRequired
// }
// Person.defaultProps = {
//   person: {
//     info: "default info about the person"
//   }
//   // img: "https://randomuser.me/api/portraits/thumb/men/45.jpg",
//   // name: 'James Doe',
//   // age: 30,
//   // info: 'this is default info'
// }


// class PersonList extends Component {
//   state = {
//     people: [
//       {
//         id: 1, 
//         img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
//         name: "Mel",
//         // age: 26
//       },
//       {
//         id: 2, 
//         img: "https://randomuser.me/api/portraits/thumb/men/22.jpg",
//         name: "John",
//         age: 28
//       },
//       {
//         id: 3, 
//         img: "https://randomuser.me/api/portraits/thumb/men/23.jpg",
//         name: "Doe",
//         age: 28,
//         info: "some info about me"
//       }
//     ]
//   }

//   render() {
//     return (
//       <section>
//         {this.state.people.map((person) => (
//           <Person 
//             key={person.id} 
//             // img={person.img} 
//             // name={person.name} 
//             // age={person.age} 
//             // info={person.info}
//             person={person}
//           />
//         ))}
//       </section>
//     )
//   }
// }


// export default class App2 extends Component {
//   render() {
//     return (
//       <div>
//         <h2>hey hey hey hey</h2>
//         <p>this is nesw</p>
//         <PersonList />
//       </div>
//     )
//   }
// }
