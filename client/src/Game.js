import React from 'react';

function Game({title, image, platform}){
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
            </p>
            <p>
                <button className="rentButton">Rent</button>
            </p>   
        </div>
    )
}

export default Game;