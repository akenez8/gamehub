import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar({ onLogout }) {
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }
    
    return(
    <header>
        <button onClick={handleLogout}>Logout</button>
    <div className="NavDiv">
        <NavLink className="nav" style={{ marginRight: "10px" }} exact to="/" >Home</NavLink>
        <NavLink className="nav" style={{ marginRight: "10px" }} to="/Login" >Login</NavLink>
        <NavLink className="nav" style={{ marginRight: "10px" }} to="/RentAGame" >Rent-A-Game</NavLink>
        <NavLink className="nav" style={{ marginRight: "10px" }} to="/MyRentals" >My Rentals</NavLink>
    </div>
    </header>
    )
}

export default Navbar;