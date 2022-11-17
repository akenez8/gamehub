import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function SignUp({ setLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    let userInfo = {
      name: name,
      password,
    };
    console.log(userInfo);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((r) => r.json())
      .then((user) => history.push("/login"));
  }

  return (
    <div>
      <form className="signup-container" onSubmit={handleSubmit}>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button type="submit">Create User</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;