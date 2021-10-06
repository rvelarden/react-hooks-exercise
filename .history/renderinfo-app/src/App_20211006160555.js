import React, { useState, useEffect } from "react";
//useState is a hook used to maintain local states in function components

//useEffect is used to execute functions after a component gets rendered

export default function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredusers, setFilteredusers] = useState([]);
  const [dropDown, setDropDown] = useState('')
  const [counter, setCounter] = useState(0)

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
                  {users.map(user => <option value={dropDown}>{bike.name}</option>)}
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

