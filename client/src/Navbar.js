import React from 'react';
import { NavLink } from "react-router-dom";
import Home from "./Home"
import Login from "./Login"
import RentAGame from "./RentAGame"
import MyRentals from "./MyRentals"

function Navbar() {
    return(
    <div className="NavDiv">
        <NavLink className="nav" style={{ marginRight: "10px" }} to="/" >Home</NavLink>
        <NavLink className="nav" style={{ marginRight: "10px" }} to="/Login" >Login</NavLink>
        <NavLink className="nav" style={{ marginRight: "10px" }} to="/RentAGame" >Rent-A-Game</NavLink>
        <NavLink className="nav" style={{ marginRight: "10px" }} to="/MyRentals" >My Rentals</NavLink>
    </div>
    )
}

export default Navbar;