import React, { useState } from 'react';

function Login({ setLogin }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      })
        .then((r) => r.json())
        .then((user) => setLogin(user));
    }
  
    return (
      <form className="loginForm" onSubmit={handleSubmit}>
        <input 
          type="text"
          value={name}
          placeholder="username"
          onChange={(e) => setName(e.target.value)}/>
          <input 
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
      
    );
  }
export default Login;