const PokemonList = (props) => {
    return (
        <div> 
            {/* Check if filteredSearch has a value if it does render the filtered results */}
            {props.filteredSearch ? 
            props.filteredResults.map((pokemon, i) => (
                <div 
                key ={i}
                className="singlePokemon">
                    <h1>{pokemon.name}</h1>
                    <span className="heartOutline" onClick={() => props.savePokemon(pokemon.name)}>♡</span>
                </div>
            ))
            :
            // if we haven't typed into the filteredSearch ('') then just render all pokemon
            props.allPokemon.map((pokemon,i) => (
                <div 
                key ={i}
                className="singlePokemon">
                    <h1>{pokemon.name}</h1>
                    <span className="heartOutline" onClick={() => props.savePokemon(pokemon.name)}>♡</span>
                </div>
            ))
            }
        </div>

    )
}

export default PokemonList