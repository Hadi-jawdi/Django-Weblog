import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('access_token');
    axios.post('http://127.0.0.1:8000/api/posts/', { title, content }, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        alert('Post created!');
        navigate('/');
      })
      .catch(err => alert('Error creating post'));
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleCreate}>
        <input type="text" placeholder="Title" className="form-control mb-2"
               value={title} onChange={e => setTitle(e.target.value)} />
        <textarea placeholder="Content" className="form-control mb-2" rows="5"
                  value={content} onChange={e => setContent(e.target.value)}></textarea>
        <button className="btn btn-primary">Create</button>
      </form>
    </div>
  );
}

export default CreatePost;
