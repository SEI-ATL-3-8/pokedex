# Pokedex

### User Stories
- I can go to the All Pokemon page and see a list of all pokemon, fetched from https://pokeapi.co/
- I can filter this list using a search bar
- Each pokemon on this page has a Fav button next to it
- When I click the Fav button, the pokemon is added to my favs list via a POST to the backend
- An already-faved pokemon has its Fav button replaced with an icon that indicates that I've already faved it
- I can go to the Faved Pokemon page and see a list of all my faved pokemon (fetched from the backend)
- Stretch: for each of the faved pokemon, I see additional data from the api (types, stats, image, etc)
- Stretch: I can click the already-faved icon for any pokemon and remove it from my faves

### Setup
Make a react app in this repo for the frontend. In a separate folder, clone down the backend from here: https://github.com/SEI-ATL-3-8/pokedex-backend. Run the backend locally to save your favs!

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
