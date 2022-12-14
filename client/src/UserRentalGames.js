import React, {useState} from 'react';

function UserRentalGames({title, image, platform, id, userUpdateRental, updateDay, deleteRental}) {
    const [editToggle, setEditToggle] = useState(false)
    const [day, setDay] = useState(updateDay)

    function updateRental(){
        userUpdateRental(id, parseInt(day))
        setEditToggle(false)
    }
    return(
        <div className="gameCard">
            <span className="bold">{title}</span>
            <img className="cardImage" id="game_img" src={image} width="220" height="180" alt="{title}"/>
            <p className="console">{platform}</p>
            <p className="day_rent"> Days: {updateDay}</p>
            {editToggle ? (<p><button onClick={updateRental}>Change Rental</button>
            <select onChange={(e) => setDay(e.target.value)}>
                <option value="">Select Rent Duration</option>
                <option value="7">7 days</option>
                <option value="14">14 days</option>
                <option value="21">21 days</option>
                <option value="30">30 days</option>
            </select></p>):<button className="editButton" onClick={() => setEditToggle(true)}>Edit</button>}
            <p>
            <button className="returnButton" onClick={() => deleteRental(id)}>Return</button>
            </p>
        </div>
    )
}

export default UserRentalGames;