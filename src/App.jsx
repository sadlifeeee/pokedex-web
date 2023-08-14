import './App.css'
import pokeball from './assets/pokeball.png'
import pokemonExample from './assets/pokemonExample.png'

function App() {

  return (
    <main>
      <div id = "topBar">

        <div id = "pokedexTitle">

          <img src = {pokeball} id = "pokeballImage"/>
          <p id = "title">Kanto PokeDex</p>
          <input id = "search" placeholder='Search'></input>

        </div>

        <select name="sort" id = "sortContainer">
          <option value="id">By ID</option>
          <option value="name">By Name</option>
        </select>
      </div>
      
      <div id="pokemonModal" className="modal">

        <div className="modal-content">
          <span className="close">&times;</span> 
          <span id = "pokemonInfoName">001. Bulbasaur</span>
          <div id = "pokemonInfoContainer">
            <div id = "pokemonInfoLeft">
              <img id = "pokemonInfoImage"/>
              
              <div id = "pokemonInfoStatsContainer">
                <span className = "pokemonInfoText" id = "pokemonInfoTitle">Base Stats:</span>
                <div id = "pokemonInfoStatistics">
                  <span className = "pokemonInfoTextStats" id = "hp">HP: 10</span>
                  <span className = "pokemonInfoTextStats" id = "atk">Attack: 10</span>
                  <span className = "pokemonInfoTextStats" id = "def">Defense: 10</span>
                  <span className = "pokemonInfoTextStats" id = "satk">Special-Attack: 10</span>
                  <span className = "pokemonInfoTextStats" id = "sdef">Special-Defense: 10</span>
                  <span className = "pokemonInfoTextStats" id = "speed">Speed: 10</span>
                </div>
              </div>
              
              

            </div>

          
            <div id = "pokemonInfoRight">

              <div id = "pokemonInfo">

                <div id = "heightWeight">
                  <span id = "heightContainer"><span className = "whiteText">Height: </span><span id = "height">23</span></span>
                  <span id = "weightContainer"><span className = "whiteText">Weight: </span><span id = "weight">23</span></span>
                </div>

                <div id = "generalInfo">
                  <span className = "pokemonInfoText"><span className = "whiteText">Abilities:  </span> <span id = "ability">Grass Poison</span></span>
                </div>
              
              </div>

                <div id = "typeInfo">

                  <div id = "weaknessContainer">
                    <p className = "pokemonInfoText">Weakness:</p>
                    <p className = "pokemonInfoText"><span id = "weakness">Fire Steel</span></p>
                  </div>

                  <div id = "typeContainer">
                    <p className = "pokemonInfoText">Type:</p>
                    <p className = "pokemonInfoText"><span id = "type">Grass Poison</span></p>
                  </div>
                  
                </div>

                <div id = "buttonDiv">
                  <button id = "back" onClick = {previousPokemon}>Previous</button>
                  <button id = "next" onClick = {nextPokemon}>Next</button>
                </div>
                    
              
            </div>
          </div>

        </div>

      </div>
      
      <div id = "pokedexBody">

      </div>

      <div id = "loadingDiv"></div>

      <footer>
        Created by Jerickson Lee using ReactJS and JS
      </footer>
    </main>
  )
}

 
export default App
