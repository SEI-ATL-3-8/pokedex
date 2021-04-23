import PokemonList from '../components/PokemonList'
const FavPokemon = (props) => {
    return (
        <div>
            <h1>Favorite Pokemon</h1>
            <PokemonList 
            allPokemon={props.favPokemon}
            />
        </div>
    )
}
export default FavPokemon