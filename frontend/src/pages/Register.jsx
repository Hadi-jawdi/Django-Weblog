import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/register/', { username, password })
      .then(res => {
        alert('Registration successful!');
        navigate('/login');
      })
      .catch(err => alert('Registration failed'));
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username" className="form-control mb-2"
               value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" className="form-control mb-2"
               value={password} onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-success">Register</button>
      </form>
    </div>
  );
}

export default Register;
