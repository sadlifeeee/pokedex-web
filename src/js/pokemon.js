const totalPokemon = 151; 

var pokedex = []
var pokedexNameList = []

window.onload = async function() {
    
    loading = document.createElement("p")
    loading.innerHTML = "Loading Pokedex..."
    loading.id = "loading"
    document.getElementById("loadingDiv").append(loading)

    for(var i = 0; i < totalPokemon; i++) {

        await getPokemon(i);
    }
    
    document.getElementById("loadingDiv").innerHTML = ""

    changeSort()

    document.getElementById("sortContainer").addEventListener("change", changeSort)
    
    document.getElementById("search").addEventListener("input", search)

}

async function getPokemon(num) {

    if(typeof num === "number"){
        num += 1
    }

    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();

    let res = await fetch(url);

    let pokemon = await res.json();
    let pokemonPhotoID = ""
    
    if(num < 10) 
        pokemonPhotoID = "00" + num.toString();
    else if(num < 100 && num >= 10) 
        pokemonPhotoID = "0" + num.toString();
    else 
        pokemonPhotoID = num.toString();

    pokedex[num - 1] = {
        "id": pokemon.id,
        "idPhoto": pokemonPhotoID,
        "name" : pokemon.name,
        "type" : pokemon.types
    }

    pokedexNameList[num - 1] = pokemon.name    
}

function changeSort() {
    
    selectElement = document.querySelector('#sortContainer')

    if(selectElement.value == "id") {

        pokedex = pokedex.sort(byID);
        pokedexNameList = pokedexNameList.sort(byID);
        displayPokemon()
    }
    else {
        
        pokedex = pokedex.sort(byName);
        pokedexNameList = pokedexNameList.sort();
        displayPokemon()
    }
    
}


function displayPokemon() {

    document.getElementById("pokedexBody").innerHTML = ""

    for(var i = 0; i < totalPokemon; i++) {
        
        // Pokemon ID & Name
        let pokemonIDName = document.createElement("span");
        pokemonIDName.setAttribute("id" , "pokemonIDName");
        pokemonIDName.classList.add("infoText");

        pokemonIDName.innerHTML = pokedex[i].idPhoto + ". " + pokedex[i].name[0].toUpperCase() + pokedex[i].name.slice(1);

        // Pokemon Type
        let pokemonType = document.createElement("p");
        pokemonType.setAttribute("id" , "pokemonType");
        pokemonType.classList.add("infoText");

        let pokemonTypeText = "";

        let pokemonTypeLength = pokedex[i].type.length

        for(var k = 0; k < pokemonTypeLength; k++) {
            pokemonTypeText += pokedex[i].type[k].type.name[0].toUpperCase() + pokedex[i].type[k].type.name.slice(1) + " ";
        }

        pokemonType.innerHTML = pokemonTypeText

        // Loading Photo
        let pokemonPhoto = document.createElement('img')
        pokemonPhoto.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + pokedex[i].idPhoto + ".png"
        pokemonPhoto.setAttribute("id" , "pokemonPhoto");

        // Creating PokemonCard
        let pokemonCard = document.createElement('div');
        pokemonCard.classList.add("pokeInfoContainer");

        pokemonCard.appendChild(pokemonPhoto);
        pokemonCard.appendChild(pokemonIDName);
        pokemonCard.appendChild(pokemonType);

        document.getElementById("pokedexBody").append(pokemonCard)
        
    }

    
    modalLoader()

}
