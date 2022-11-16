import React, {useState, useEffect} from 'react';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from "./Navbar"
import Home from "./Home"
import Login from "./Login"
import RentAGame from "./RentAGame"
import MyRentals from "./MyRentals"

function App() {
  const [games,setGames]= useState([])

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

  // if (user) {
  //   return <h2>Welcome, {user.username}!</h2>;
  // } else {
  //   return <Login onLogin={setUser} />;
  // }

  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Navbar />
      </header>
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/rentagame"><RentAGame games={games} /></Route>
          <Route path="/myrentals"><MyRentals /></Route>
          <Route exact path="/"><Home games={games}/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
