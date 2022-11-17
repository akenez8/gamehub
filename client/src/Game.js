import React from 'react';

function Game({title, image, platform}){
    return(
        <div className="gameCard">
            <span className="bold">{title}</span>
            <img className="cardImage" id="game_img" src={image} width="220" height="180" alt="{title}"/>
            <a className="console">{platform}</a>
            <p>
            <button>Rent</button>
            </p>
        </div>
    )
}

export default Game;