import axios from 'axios'
import env from 'react-dotenv'

const PokemonList = (props) => {
  const isAlreadyFaved = (pokemon) => {
    return props.favPokemons.map(p => p.name).includes(pokemon.name)
  }
  
  return (
    <ul>
      {props.pokemon.length > 0 ?
      props.pokemon.map((p) => {
        return (
          <li key={p.name}>
            {p.name}
            {' '}
            {isAlreadyFaved(p) ? 
              '❤️'
            :
              <span
                onClick={() => {
                  axios.post(`${env.BACKEND_URL}/favPokemon`)
                  .then(props.fetchFavPokemons)
                }}
              >♡</span>
            }

          </li>
        )
      })
      :
      <p>Loading...</p>
      }
    </ul>
  )
}

export default PokemonList