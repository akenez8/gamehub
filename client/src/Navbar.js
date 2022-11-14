import React from 'react';
import Home from "./Home"
import Login from "./Login"
import RentAGame from "./RentAGame"
import MyRentals from "./MyRentals"

function Navbar() {
    return(
    <div className="NavDiv">
        <Home />
        <Login />
        <RentAGame />
        <MyRentals />
    </div>
    )
}

export default Navbar;