import React, {useState} from 'react';
import UserRentalGames from "./UserRentalGames";

function MyRentals({rentals, setRentals, user}){
const [myRentals, setMyRentals] = useState([])
    // const userRentedGames = rentals.map((rental) => {
    //     return(
    //         (rental.game)
    //     )})
    if(myRentals.length > 0 && myRentals[0] !== undefined){
        console.log(rentals);
        const filteredUserRentedGames = rentals.filter((rental) => {
            return (rental.user_id === user.id)})

        setMyRentals(filteredUserRentedGames)
    }
    const userGameCard = myRentals.map((game) => {
        return(
            <UserRentalGames title={game.title} image={game.image} platform={game.platform}/>
        )})
    

    return(
        <div>
            <p className="MyRentalsTitle">Your Rented Games</p>
            <p>{userGameCard}</p>
        </div>
        
    )

}

export default MyRentals;