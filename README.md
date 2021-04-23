
1. set up your routes and page transitions
2. all pokemon: fetch data & save to state
2. pass into pokemon list
2. display all w/ fav buttons, don't worry about whether they should actually have fav buttons yet, buttons just log "${name} was faved"
3. set up search bar
3. make search bar component
3. pass in searchTerm & setter
3. filter in allPokemonPage
4. introduce the idea of faving: it needs a new piece of state, what should it look like & where should it live? array of faved pokemons from backend, lives in App
4. start to fetch fav pokemon data from backend; maybe detour to env var? maybe they clone down the whole backend repo and run it locally? 
4. fetch fav data, store in App, pass into favs list page
4. reuse pokemonList
5. pass favs into allPokemon page to conditionally show red heart
6. on clicking an empty heart, post to backend
6. after successful post, reload favs
7. on clicking on a full heart, delete to backend & reload
8. deploy???