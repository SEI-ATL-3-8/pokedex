import AllPokemon from './pages/AllPokemon'
import FavPokemon from './pages/FavPokemon'
import Navbar from './components/Navbar'
import {Route} from 'react-router-dom'
import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'

function App() {
  const [favPokemon,setFavPokemon] = useState([])

  // fetch saved pokemon from the database function
  const fetchSavedPokemon = async () => {
    try {
      let response = await axios.get('http://localhost:3001/favPokemon')
      console.log(response)
      // assign to state of favPokemon
      setFavPokemon(response.data.favPokemon)
    } catch (error) {
      console.log(error)
    }
  }

  // ONLY when the app loads fetch all saved pokemon 
  useEffect(() => {
    fetchSavedPokemon()
  },[])

  const savePokemon = async (pokemonName) => {
    try {
      let res = await axios.post('http://localhost:3001/favPokemon', {
        name: pokemonName
      })
      // after every save, refetch all saved pokemon 
      fetchSavedPokemon()
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="App">
      <Navbar />
      <Route 
        exact path = "/"
        render={() => 
          <AllPokemon
          savePokemon = {savePokemon} 
          />
        }
      />
      <Route 
      exact path = "/favorites"
      render={() => 
        <FavPokemon 
        favPokemon ={favPokemon}
        />
        }
      />
      
    </div>
  );
}

export default App;
