import React from 'react';

function Home({games}){
    // const popularGamesArray = [...games];
    // const popularGames = popularGamesArray.slice(0,5)

    
    return(
        <div>
      <p className="HomeTitle">GameHub</p>
      <p className="HomeText">We gonna put a big image here</p>
      <p className="HomeText">Top 5 games</p>
      </div>
    )
}

export default Home;