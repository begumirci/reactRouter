import { useState, useEffect } from "react";

function Posts(){
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(x => x.json())
            .then(x => setPost(x));
    }, []);

    return (
        <div className="posts">
            {post.map(a => (
                <div className="post" key={a.id}>
                    <div className="title"><span>Title: </span> {a.title}</div>
                    <div className="body"><span>Body: </span>{a.body}</div>
                </div>
            ))}
        </div>
    )

}

export default Posts;