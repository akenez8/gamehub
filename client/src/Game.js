import React, {useState} from 'react';

function Game({title, image, platform}){
    const [day, setDay] = useState("")

    return(
        <div className="gameCard">
            <span className="bold">{title}</span>
            <div class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                            <img className="cardImage" id="game_img" src={image} width="220" height="180" alt="{title}"/>
                    </div>
                </div>
            </div> 
            <p className="console">{platform}
            <img className="cardImage" id="game_img" src={image} width="220" height="180" alt="{title}"/>
            <p className="console">{platform}</p>
            <p>
            <button>Rent</button>
            </p>
            <p>
                <button className="rentButton">Rent</button>
            </p>   
        </div>
    )
}

// rented ? <button onclick="deleteRental">Return</button> : <button onClick="updateRentalStatus">Rent</button>
export default Game;