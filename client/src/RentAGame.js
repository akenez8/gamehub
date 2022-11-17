import React from 'react';
import Game from "./Game"

function RentAGame({games}){
    const gamesCard = games.map((game) => {
        return(
            <Game key={game.id} title={game.title} image={game.image} platform ={game.platform} />
        )})
        console.log(games)
    
    return(
        <div className="cardDivContainer">
        <li className="RentalCardDiv">
            <ul>
                <p>{gamesCard}</p>
                <p>stinky</p>
            </ul>
        </li>
        </div>
    )

}

export default RentAGame;