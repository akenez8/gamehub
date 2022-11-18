import React from 'react';

function UserRentalGames({title, image, platform}){

    return(
        <div className="gameCard">
            <span className="bold">{title}</span>
            <img className="cardImage" id="game_img" src={image} width="220" height="180" alt="{title}"/>
            <p className="console">{platform}</p>
            <p>
            <button>Rent</button>
            </p>
        </div>
    )
}

// rented ? <button onclick="deleteRental">Return</button> : <button onClick="updateRentalStatus">Rent</button>
export default UserRentalGames;