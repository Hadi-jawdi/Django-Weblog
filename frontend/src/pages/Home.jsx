import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/posts/')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      {posts.length === 0 && <p>No posts available.</p>}
      {posts.map(post => (
        <div key={post.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content.substring(0, 100)}...</p>
            <Link to={`/post/${post.id}`} className="btn btn-primary">Read More</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
