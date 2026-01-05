import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    API.post("token/", { username, password })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        navigate("/");
      })
      .catch(() => alert("Invalid credentials"));
  };

  return (
    <form onSubmit={login} className="card p-4 col-md-4 mx-auto">
      <h4>Login</h4>
      <input className="form-control mb-2" placeholder="Username"
        onChange={(e) => setUsername(e.target.value)} />
      <input type="password" className="form-control mb-2" placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} />
      <button className="btn btn-primary">Login</button>
    </form>
  );
}

export default Login;
