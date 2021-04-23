### 1
- set up your routes and page transitions
### 2
- all pokemon: fetch data & save to state
- pass into pokemon list
- display all w/ fav buttons, don't worry about whether they should actually have fav buttons yet, buttons just log "${name} was faved"
### 3
- set up search bar
- make search bar component
- pass in searchTerm & setter
- filter in allPokemonPage
### 4
- introduce the idea of faving: it needs a new piece of state, what should it look like & where should it live? array of faved pokemons from backend, lives in App
- start to fetch fav pokemon data from backend; maybe detour to env var? maybe they clone down the whole backend repo and run it locally? 
- fetch fav data, store in App, pass into favs list page
- reuse pokemonList
### 5
- pass favs into allPokemon page to conditionally show red heart
### 6
- on clicking an empty heart, post to backend
- after successful post, reload favs
### 7
- on clicking on a full heart, delete to backend & reload
### 8
- deploy???
