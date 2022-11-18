import React from 'react';
import Game from "./Game";
import UserRentalGames from "./UserRentalGames";

function MyRentals({rentals, setRentals}){

    
    
    const userRentedGames = rentals.map((rental) => {
        return(
            (rental.game)
        )
    })

    // const filteredUserRentedGames = userRentedGames.filter((user) => {
    //     user.id == rental.user_id ? 
    // })

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