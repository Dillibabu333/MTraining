import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';

const Home = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []); 
  return (
    <div>
       <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}> 
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Gender: {user.gender}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home