import React from 'react';
import Game from "./Game";
import UserRentalGames from "./UserRentalGames";

function MyRentals({rentals, setRentals}){

    const userRentedGames = rentals.filter((rental) => {
        return(
            (rental.game)
        )
    })

    const userGameCard = userRentedGames.map((game) => {
        return(
            <UserRentalGames title={game.title} image={game.image} platform={game.platform}/>
        )
    }
    )
    return(
        <div>
            <p className="MyRentalsTitle">Your Rented Games</p>
            <p>{userGameCard}</p>
        </div>
        
    )

}

export default MyRentals;