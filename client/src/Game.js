import React from 'react';

function Game({title, image, platform}){
    return(
        <div className="gameCard">
            <p className="bold">{title}</p>
            <image src={image} alt="poopy">we finna put an image here</image>
            <p className="console">{platform}</p>
            <button>Rent</button>
        </div>
    )
}

export default Game;