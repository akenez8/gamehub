import React from 'react';

function Game({title, image, platform}){
    return(
        <li className="gameCard">
            <span className="bold">{title}</span>
            <img id="game_img" src={image} width="220" height="180" alt="{title}"/>
            <span className="console">{platform}</span>
            <p>
            <button>Rent</button>
            </p>
        </li>
    )
}

export default Game;