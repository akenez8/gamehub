import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar({ user, setUser, setLogout }) {
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        })
        .then(res => {
          if (res.ok) {
            console.log('delete')
          }
        })
      }
    
    return(
    <header className="navHeader">
      <div className="logoutButtonDiv">
        { user ? <button className="logoutButton" onClick={handleLogout}>Logout</button> : null} 
      </div>
    <div className="NavDiv">
        <NavLink className="nav" style={{ marginRight: "10px" }} exact to="/" >Home</NavLink>
        <NavLink className="nav" style={{ marginRight: "10px" }} to="/RentAGame" >Rent-A-Game</NavLink>
        <NavLink className="nav" style={{ marginRight: "10px" }} to="/MyRentals" >My Rentals</NavLink>
        {user ? null : <NavLink className="nav" style={{ marginRight: "10px" }} to="/Login" >Login</NavLink> }
        {user ? null : <NavLink className="nav" style={{ marginRight: "10px" }} to="/SignUp" >SignUp</NavLink>}
    </div>
    </header>
    )
}

export default Navbar;