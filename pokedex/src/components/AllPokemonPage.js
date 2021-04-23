import axios from 'axios'
import { useState, useEffect } from 'react'

import PokemonList from './PokemonList'
import SearchBar from './SearchBar'

const AllPokemonPage = (props) => {
  const [allPokemon, setAllPokemon] = useState([])
  const [filteredPokemon, setFilteredPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  
  const fetchAllPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then((response) => { 
      setAllPokemon(response.data.results) 
    })
  }
  useEffect(fetchAllPokemon, [])

  const filterPokemon = () => {
    const result = allPokemon.filter((p) => {
      return p.name.includes(searchTerm)
    })
    setFilteredPokemon(result)
  }
  useEffect(filterPokemon, [allPokemon, searchTerm])
  
  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PokemonList pokemon={filteredPokemon} favPokemons={props.favPokemons} fetchFavPokemons={props.fetchFavPokemons} />
    </div>
  )
}

export default AllPokemonPage