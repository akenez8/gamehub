import React, {useReducer, useState} from 'react';
import Game from "./Game"

const RentAGame = ({games, userAddRental}) => {
    const [console, setConsole] = useState("All")
    const RentAGameComp = games.filter((game) => {
        if (console === "All") return true
        return game.platform === console
    }).map((game) => <Game key={game.id} id ={game.id} title={game.title} image={game.image} platform={game.platform} userAddRental={userAddRental}/>)

    return (
        <div>
            <select className="console_filter" onChange={(e) => setConsole(e.target.value)}>
                <option value="" disabled>Filter by console</option>
                <option value="All">All</option>
                <option value="SNES">SNES</option>
                <option value="Nintendo 64">N64</option>
                <option value="GameCube">GameCube</option>
                <option value="Wii">Wii</option>
                <option value="Wii U">Wii U</option>
                <option value="Switch">Switch</option>
                <option value="Playstation">PS</option>
                <option value="Playstation 2">PS 2</option>
                <option value="Playstation 3">PS 3</option>
                <option value="Playstation 4">PS 4</option>
                <option value="Playstation 5">PS 5</option>
                <option value="Xbox">Xbox</option>
                <option value="Xbox 360">Xbox 360</option>
                <option value="Xbox One">Xbox One</option>
                <option value="Xbox Series X">Xbox X</option>
                <option value="PC">PC</option>
            </select>
            <div className="row">
                <div className='column'>
                    <div id="home_card">
                        {RentAGameComp}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RentAGame;