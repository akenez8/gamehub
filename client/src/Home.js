import React, {useState, useEffect} from 'react';
import Game from "./Game"

function Home({games, userAddRental}){
    const [randomList, setRandomList] = useState([])
    useEffect(()=>{
        function randomGameList(){
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
            setRandomList(randomGames)
        }
        randomGameList()
    },[games])

    const gamesCardTwo = () => {
      if(randomList.length > 0 && randomList[0] !== undefined){
        return randomList.map((game) => {
            return(
                <Game key={game.id} id={game.id} title={game.title} image={game.image} platform ={game.platform} userAddRental={userAddRental}/>
            )
        })
      }
    }

    return(
    <div>
        <div id="gaming_image_home">
            <img style={{width: 700, height: 300}} src="https://wallpaperaccess.com/full/174714.jpg" alt="Gaming is not a crime"/>
        </div>
      <p className="DescribeText">Rent Games Digitally!</p>
      <p className="DescribeText"><strong>GameHub</strong> is the newest video game rental platform with many games to choose from. You're able to rent used video games without worrying about late fees. At GameHub, you will find used video games from the <em> newest systems </em> to <em> older systems </em> such as the SNES!</p>
      <p className="TopGames">Top 5 Games</p>
      <hr></hr>
        <div className="row">
            <div className='column'>
                <div id='home_card'>
                    {gamesCardTwo()}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;