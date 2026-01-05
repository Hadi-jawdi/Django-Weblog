import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();

    API.post("register/", { username, password })
      .then(() => {
        alert("Account created!");
        navigate("/login");
      })
      .catch(() => alert("Registration failed"));
  };

  return (
    <form onSubmit={register} className="card p-4 col-md-4 mx-auto">
      <h4>Register</h4>
      <input className="form-control mb-2" placeholder="Username"
        onChange={(e) => setUsername(e.target.value)} />
      <input type="password" className="form-control mb-2" placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} />
      <button className="btn btn-success">Register</button>
    </form>
  );
}

export default Register;
