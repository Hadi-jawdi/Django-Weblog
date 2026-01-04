import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/token/', { username, password })
      .then(res => {
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        navigate('/');
      })
      .catch(err => alert('Login failed'));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" className="form-control mb-2"
               value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" className="form-control mb-2"
               value={password} onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
