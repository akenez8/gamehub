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
import SignUp from "./SignUp"

function App() {
  const [games,setGames]= useState([]);
  const [user, setUser] = useState(false);
  const [rentals, setRentals] = useState([])
  const [rented, setRented] = useState(false)
  const [fetchedData, setFetchedData] = useState(false)

  useEffect(() => {
    fetch("/games")
    .then((res) => res.json())
    .then((data) => setGames(data))

    const user = sessionStorage.getItem('user')
  },[])

  useEffect(() => {
    fetch("/rentals")
    .then((res) => res.json())
    .then((data) => setRentals(data))
  },[fetchedData])


  function userAddRental(id, day){
    setFetchedData(true)
    const newObj = {
      user_id: user.id,
      game_id: id,
      day: parseInt(day)
    }
    console.log(newObj)
    const requestOptions = {
    method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newObj)
    };
    fetch('/rentals', requestOptions)
        .then(response => response.json())
        .then(data => setFetchedData(false));
     }

     function userUpdateRental(id, day){
      setFetchedData(true)
      const requestOptions = {
        method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({day:day})
        };
        fetch(`/rentals/${id}`, requestOptions)
            .then(response => response.json())
            .then(data => setFetchedData(false));
         }

      function deleteRental(id){
        setFetchedData(true)
        const requestOptions = {
          method: 'DELETE'
        };
        fetch(`/rentals/${id}`, requestOptions)
        .then(() => setFetchedData(false))
      }

  useEffect(() => {
    const currentUser = sessionStorage.getItem('user')
    if(currentUser){
      setUser(JSON.parse(currentUser))
    }
  }, []);

  function onLogin(user) {
    setUser(user);
  }

  function onLogout() {
    sessionStorage.removeItem('user')
    setUser("");
  }
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Navbar user={user} setUser={setUser} setLogout={onLogout}/>
      </header>
      <p className="font-effect-fire-animation">GameHub</p>
      <Switch>
        <Route path="/me"><Me /></Route>
        <Route path="/login"><Login setLogin={setUser}/></Route>
        <Route path="/RentAGame"><RentAGame games={games} rented={rented} setRented={setRented} user={user} userAddRental={userAddRental} /></Route>
        <Route path="/MyRentals"><MyRentals userUpdateRental={userUpdateRental} rentals = {rentals} setRentals={setRentals} user={user} deleteRental={deleteRental}/></Route>
        <Route path="/SignUp"><SignUp /></Route>
        <Route exact path="/"><Home games={games} userAddRental={userAddRental}/></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
