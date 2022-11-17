import React from 'react';
import Game from "./Game"

function Home({games}){

  let deck = [];

  for (let x = 0; x < games.length; x++) {
    deck.push(games[x])
  }

  for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
  }

  let randomGames = []

  for (let i = 0; i < 5; i++) {
    randomGames.push(deck[i])
  }

    const gamesCard = randomGames.map((game) => {
        return(
            <Game key={game.id} title={game.title} image={game.image} platform ={game.platform} />
        )})


    return(
    <div>
      <p className="HomeTitle">GameHub</p>
        <div id="gaming_image_home">
            <p>Rent Games Digitally</p>
            <img style={{width: 700, height: 300}} src="https://wallpaperaccess.com/full/174714.jpg" alt="Gaming is not a crime"/>
        </div>
      <p className="HomeText">GameHub is the newest video game rentals, with many titles to choose from used video games without worrying about any late fees. At GameHub you will find the used video games with the newest systems or blast from the past system.</p>
      <p className="HomeText">Top 5 games</p>
        <div>   
            <p>{gamesCard}</p>
        </div>
    </div>
    )
}

export default Home;