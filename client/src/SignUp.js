import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SignUp() {
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
        <input
          className="signup-input"
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="signup-input"
          type="password"
          value={password}
          placeholder="password"
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