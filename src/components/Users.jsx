import React, { useEffect } from 'react'
import { useState } from 'react';
import '../App.css';

export default function Users() {
    const [user, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(x => x.json()).then(x => setUsers(x));

    },[]);
    
  return (
    <div className='posts'>
      {
        user.map(x => (
            <div className='post' key={x.id}>
                <div className='title'><span>Name: </span>{x.name}</div>
                <div className='body'><span>Username: </span>{x.username}</div>
                <div className='body'><span>E-mail: </span>{x.email}</div>
            </div>
        ))
      }
    </div>
  )
}
