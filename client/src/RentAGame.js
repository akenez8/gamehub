import React from 'react';
import Game from "./Game"

function RentAGame({games}){
    const gamesCard = games.map((game) => {
        return(
            <Game key={game.id} title={game.title} image={game.image} platform ={game.platform} />
        )})
    

    return(
        <div className="cardDivContainer">
        <div className="RentalCardDiv">
            <ul>
                <p>{gamesCard}</p>
                <p>stinky</p>
            </ul>
        </div>
        </div>
    )

}

export default RentAGame;