import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function Login({ setLogin, user }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()

    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      })
        .then((res) => {
          if (res.ok) {
            res.json().then((data)=>{
              sessionStorage.setItem("user", JSON.stringify(data))
              setLogin(data)
              history.push('/')
            })
          } else {
            res.json().then(event => alert(event.error))
          }
        })
        }

    return (
      <>
      <form className="loginForm" onSubmit={handleSubmit}>
        <p className="login-text"><strong> Login Here! </strong></p>
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
        <p className="account-text"><strong>Don't have an account?</strong></p>
        <button className="createAccountButton" onClick={()=> history.push('/SignUp')}>Create Account</button>
        </form>
      </>
    );
  }
export default Login;