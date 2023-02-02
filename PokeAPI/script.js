console.log('script online!');

/*

API (Application Programming Interface)

JSON (Java Script Object Notation)

*/

var pokeDiv = document.querySelector('#pokemonData');
var pokeSearch = document.querySelector('#pokeSearch');


async function getPokeData() {
    // async is a decorator to declare the function is async and give us access to await
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokeSearch.value);
    // await allows us to tell the code to only continue running when that line has finished.
    // console.log(response);
    var PokeData = await response.json();

    pokeDiv.innerHTML += `<h1>Pokemon Name: ${PokeData.name}</h1>`
    pokeDiv.innerHTML += `<img src='${PokeData.sprites.front_shiny} '>`
}

// getPokeData();
