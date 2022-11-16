import React, { useState } from 'react';

// function Login(){
//     return(
//         <div>Login</div>
//     )
// }

function Login({ onLogin }) {
    const [name, setName] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      })
        .then((r) => r.json())
        .then((user) => onLogin(user));
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
          value={name}
          onChange={(e) => setName(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    );
  }
export default Login;