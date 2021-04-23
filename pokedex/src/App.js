import { Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import env from 'react-dotenv'
import axios from 'axios'

import './App.css';
import Nav from './components/Nav'
import AllPokemonPage from './components/AllPokemonPage'
import FavPokemonPage from './components/FavPokemonPage'

function App() {
  const [favPokemons, setFavPokemons] = useState([])

  const fetchFavPokemons = () => {
    axios.get(`${env.BACKEND_URL}/favPokemon`)
    .then((response) => {
      setFavPokemons(response.data.favPokemon)
    })
  }
  useEffect(fetchFavPokemons, [])

  return (
    <div>
      <Nav />
      <Route path="/pokemon" render={() => {
        return <AllPokemonPage favPokemons={favPokemons} fetchFavPokemons={fetchFavPokemons} />
      }} />
      <Route path="/favorites" render={() => {
        return <FavPokemonPage favPokemons={favPokemons} />
      }} />
    </div>
  );
}

export default App;
