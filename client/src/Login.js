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
        <p>
        <input 
          className="usernameInput"
          type="text"
          value={name}
          placeholder="username"
          onChange={(e) => setName(e.target.value)}/>
          </p>
          <p>
          <input 
          className="passwordInput"
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          </p>
        <button className="loginButton"type="submit">Login</button>
        <p>Dont have an account?</p>
        <button className="createAccountButton" type="submit">Create Account</button>
      </form>
      
    );
  }
export default Login;