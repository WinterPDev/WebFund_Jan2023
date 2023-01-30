console.log('Hello from the console!');


function alertmsg(message) {
    alert(message)
}

function thisEL(element) {

    console.log(element.innerText);
    element.innerText = 'Mawile is the best pokemon!'
}

function turnOff(element) {
    element.innerText = "Off";
}

function changeImg(element) {

    element.src = 'https://archives.bulbagarden.net/media/upload/thumb/e/e6/0303Mawile-Mega.png/600px-0303Mawile-Mega.png'

}


var pokePic = document.querySelector('#pokemon');

var pokeName = document.querySelector('#pokemonName');

var pokeTeam = document.querySelector('#pokemonTeam')

console.log(pokeTeam.innerHTML);

function evolvePokemon() {

    pokePic.src = 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/0565Carracosta.png/600px-0565Carracosta.png'

    pokePic.alt = 'Carracosta'

    pokeName.innerText = 'Carracosta'

    // document.querySelector('#title').remove()
    pokeName.style.backgroundColor = 'blue'
}


function getPokemon() {
    var pokeChoice = document.querySelector('#pokeName').value
    var pokeID = document.querySelector('#pokeID').value
    var fullName = `0${pokeID}${pokeChoice}`
    pokePic.src = `https://archives.bulbagarden.net/media/upload/thumb/c/cd/${fullName}.png/600px-${fullName}.png`;

}