function search(e) {

    document.getElementById("pokedexBody").innerHTML = ""

    for(var i = 0; i < totalPokemon; i++) {
        
        if(pokedexNameList[i].toLowerCase().includes(e.target.value.toLowerCase())) {
            displaySearch(i)
        } else if (e.target.value == pokedex[i].id) {
            displaySearch(i)
        }

    }

}

function displaySearch(i) {

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