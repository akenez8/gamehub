import React from 'react';

function Game({title, image, platform}){
    return(
        <div className="gameCard">
            <span className="bold">{title}</span>
            <img id="game_img" src={image} width="220" height="180" alt="{title}"/>
            <p className="console">{platform}</p>
            <a>
            <button>Rent</button>
            </a>
        </div>
    )
}

export default Game;