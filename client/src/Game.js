import React from 'react';

function Game({title, image, platform}){
    return(
        <div className="gameCard">
            <p className="bold">{title}</p>
            <img id="game_img" src={image} width="220" height="180" alt="{title}"/>
            <p className="console">{platform}</p>
            <button>Rent</button>
        </div>
    )
}

export default Game;