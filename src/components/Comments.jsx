import React from 'react'
import { useState,useEffect } from 'react';
import '../App.css';

export default function Comments() {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments').then(x => x.json())
            .then(x => setComment(x));
    }, []);

    return (
        <div className="posts">
            {comment.map(a => (
                <div className="post" key={a.id}>
                    <div className="title"><span>Name: </span> {a.name}</div>
                    <div className='body'><span>E-mail: </span>{a.email}</div>
                    <div className="body"><span>Body: </span>{a.body}</div>
                </div>
            ))}
        </div>
    )
}
