import React from 'react';
import Game from "./Game"

function Home({games}){
    let arr = [];

for (let x = 0; x < games.length; x++) {
    arr.push(games[x])
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
let randomGames = []
for (let i = 0; i < 5 ; i++) {
    randomGames.push(arr[i])
}

    const gamesCardTwo = randomGames.map((game) => {
        return(
            <Game key={game.id} title={game.title} image={game.image} platform ={game.platform} />
        )})


    return(
    <div>
        <div id="gaming_image_home">
            <p>Rent Games Digitally</p>
            <img style={{width: 700, height: 300}} src="https://wallpaperaccess.com/full/174714.jpg" alt="Gaming is not a crime"/>
        </div>
      <p className="DescribeText"><strong>Game</strong>Hub is the newest video game rentals, with many titles to choose from used video games without worrying about any late fees. At GameHub you will find the used video games with the <em>newest systems</em> to blast from the <i>past</i>.</p>
      <p className="TopGames">Top 5 games</p>
        <div className="row">
            <div className='column'>
                <div id='home_card'>
                    {gamesCardTwo}
                </div>
            </div>
        </div>
        <audio name="GameHub" src="https://www.youtube.com/watch?v=N9uTi3R4jlo" loop="true" autostart="true" hidden="true" controls></audio>
    </div>
    )
}

export default Home;