import React, {useEffect, useState} from 'react';
import UserRentalGames from "./UserRentalGames";

function MyRentals({rentals, setRentals, user}){
const [myRentals, setMyRentals] = useState([])
    // const userRentedGames = rentals.map((rental) => {
    //     return(
    //         (rental.game)
    //     )})
    useEffect(() => {
        
    })
    if(rentals.length > 0 && rentals[0] !== undefined){
        console.log(rentals);
        console.log(user)
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
            <div className="row">
                <div className='column'>
                    <div id="home_card">
                        {userGameCard}
                    </div>
                </div>
            </div>

        </div>
        
    )

}

export default MyRentals;