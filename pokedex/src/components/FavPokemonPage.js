import PokemonList from './PokemonList'

const FavPokemonPage = (props) => {
  return (
    <div>
      <PokemonList pokemon={props.favPokemons} />
    </div>
  )
}

export default FavPokemonPage