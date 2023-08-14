import './App.css'
import pokeball from './assets/pokeball.png'

function App() {

  return (
    <main>
      <div id = "topBar">

        <div id = "pokedexTitle">
          <img src = {pokeball} id = "pokeballImage"/>

          <p id = "title">Kanto PokeDex</p>
        </div>
        

        <select name="sort" id = "sortContainer">
          <option value="id">By ID</option>
          <option value="name">By Name</option>
        </select>
      </div>
      
      
      <div id = "pokedexBody">

      </div>

      <footer>
        Created by Jerickson Lee using ReactJS and JS
      </footer>
    </main>
  )
}

 
export default App
