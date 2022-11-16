import React, {useState, useEffect} from 'react';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from "./Navbar"
import Home from "./Home"
import Login from "./Login"
import RentAGame from "./RentAGame"
import MyRentals from "./MyRentals"
import Me from "./Me"

function App() {
  const [games,setGames]= useState([]);
  const [user, setUser] = useState(null);
  const [logout, setLogout] = useState(null);
  const [login, setLogin] = useState('');

  useEffect(() => {
    fetch("http://localhost:4000/games")
    .then((res) => res.json())
    .then((data) => setGames(data))
  },[])

  console.log(games)

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);


  if (!user) {
    return <Login setLogin={setUser} />
  } else {
    <h2>Welcome, {user.name}!</h2>
  }

  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Navbar user={user} setUser={setUser} setLogout={setLogout}/>
      </header>
      <p className="siteTitle">GameHub</p>
        <Switch>
          <Route path="/me"><Me /></Route>
          <Route path="/login"><Login setLogin={setUser}/></Route>
          <Route path="/rent-a-game"><RentAGame games={games} /></Route>
          <Route path="/my-rentals"><MyRentals /></Route>
          <Route exact path="/"><Home games={games}/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
