import React, {useState} from 'react';

function Game({title, image, platform}){
    const [day, setDay] = useState("")

    return(
        <div className="gameCard">
            <span className="bold">{title}</span>
            <img className="cardImage" id="game_img" src={image} width="220" height="180" alt="{title}"/>
            <p className="console">{platform}</p>
            <p>
            <button>Rent</button>
            <select onChange={(e) => setDay(e.target.value)}>
                <option value="" disabled>Days Rent</option>
                <option value="7">7 days</option>
                <option value="14">14 days</option>
                <option value="21">21 days</option>
                <option value="30">30 days</option>
            </select>
            </p>
        </div>
    )
}

// rented ? <button onclick="deleteRental">Return</button> : <button onClick="updateRentalStatus">Rent</button>
export default Game;