import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

// function HomeButton() {
//   let history = useHistory();

//   function handleClick() {
//     history.push("/rent-a-game");
//   }

//   return (
//     <button type="loginButton" onClick={handleClick}>
//       Go home
//     </button>
//   );
// }

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
        // .then((r) => r.json())
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
      </form>
        <button className="createAccountButton" onClick={()=> history.push('/SignUp')}>Create Account</button>
      </>
      
    );
  }
export default Login;