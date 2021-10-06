// import logo from './logo.svg';
// import './App.css';
// import React from 'react'
// import Main from './components/Main'

// class App extends React.Component{
// //The constructor() method is called before anything else when the component is initiated, and it is the natural place to set up the initial state and other initial values.
//   state = {
//     users: []
//   }
// //The componentDidMount() method is invoked immediately after a component rendered.
// //1 data won’t be loaded until after the initial render so you need to set up initial state properly
// //2 it will ensure that data is only fetched from the client.
//   componentDidMount(){
//     //HTTP GET request
//     fetch('http://localhost:3001/users')
//     .then(res => res.json())
//     .then(data =>{ this.setState({
//       users: data 
//     })})
//   }

  
  

// //Render is the method that actual outputs HTML to the DOM and It returns a single element 
//   render(){
    
//     return(
//       <div>
//         <Main users={this.state.users}/>
//         <ul>{this.state.users.map(user =>( <h1>{user.name}</h1>))}
//         </ul>
//       </div>
//     )
//   }
// }

// export default App

// import React, {useEffect, useState} from 'react'

// export default function App() {

//   const [users, setState] = useState([])
//   const [search, setSearch] = useState('')

//   const filteredUsers = users.filter(userItem => {
//     return userItem.name.toLowerCase().includes(search.toLowerCase)})

//   useEffect(() => {
//       fetch("http://localhost:3001/users")
//       .then(res => res.json())
//       .then(data =>{setState(data)})
//   }, [])
//   return (
//       <div>
//           <input type='text' onChange={e => {setSearch(e.target.value)}}></input>
//           {users.map( (user) => (<UserCard {...user}/>))}      
//       </div>
//   )
// }

import React, { useState, useEffect } from "react";
//useState is a hook used to maintain local states in function components

//useEffect is used to execute functions after a component gets rendered

export default function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredusers, setFilteredusers] = useState([]);
  const [dropDown, setDropDown] = useState('')

  //3 componentDidMOunt() in where we are gonna make the API call with http get request
  //executes a function right after the component is renderd
  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(data =>{setUsers(data)})
     
  }, [])

  useEffect(() => {
    setFilteredusers(
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  return (
    <div>
         <select onChange={(e)=> setDropDown(e.target.value)}>
              <option>Select category</option>
                  {users.map(bike => <option value={dropDown}>{bike.name}</option>)}
          </select>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredusers.map((user) => (
        <CountryDetail  {...user} />
      ))}
    </div>
  );
}

const CountryDetail = (props) => {
  const { name, image } = props;

  return (
    <>
      <p>
        <img src={image} style={{ width: "200px", height: "200px" }} />
      </p>
      <h2>{name}</h2>
    </>
  );
};

