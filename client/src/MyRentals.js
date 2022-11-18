import React, {useEffect, useState} from 'react';
import UserRentalGames from "./UserRentalGames";

function MyRentals({rentals, userUpdateRental, user, deleteRental}){
const [myRentals, setMyRentals] = useState([])
    useEffect(() => {
        if(rentals.length > 0){
            console.log(rentals)
            const filteredUserRentedGames = rentals.filter((rental) => {
                return (rental.user_id === user.id)})
    
            setMyRentals(filteredUserRentedGames)
        }
    },[rentals])
    
    const userGameCard = myRentals.map(({game, id, day}) => {
        return(
            <UserRentalGames updateDay={day} userUpdateRental={userUpdateRental} id={id}title={game.title} image={game.image} platform={game.platform} deleteRental={deleteRental}/>
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