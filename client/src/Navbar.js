import React from 'react';
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Navbar({ user, setUser, setLogout }) {

  let history = useHistory();
      
      function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        });
          history.push(`/`);
          setUser([]);
}
    return(
    <header className="navHeader">
      <div className="logoutButtonDiv">
        <button className="logoutButton" onClick={handleLogout}>Logout</button>
        {user && <span className="usernameSpan">Welcome, {user.name}!</span>}
        { user ? <button className="logoutButton" onClick={handleLogout}>Logout</button> : null} 
      </div>
      <div>
        <NavLink  className="nav" class="active" style={{ marginRight: "10px" }} exact to="/" >Home</NavLink>
        <NavLink  className="nav" style={{ marginRight: "10px" }} to="/RentAGame" >Rent-A-Game</NavLink>
        <NavLink  className="nav" style={{ marginRight: "10px" }} to="/MyRentals" >My Rentals</NavLink>
        {user ? null : <NavLink  style={{ marginRight: "10px" }} to="/Login" >Login</NavLink> }
        {user ? null : <NavLink  style={{ marginRight: "10px" }} to="/SignUp" >SignUp</NavLink>}
      </div>
    </header>
    )
}

export default Navbar;