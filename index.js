//DESARROLLA AQUI TUS SOLUCIONES

//Ejercicio 1.- Declara una función getRandomPokemon que retorne un pokemon aleatorio.
async function getRandomPokemon() {

    let randomIndex = Math.floor(Math.random() * 20) + 1;
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex}`)
        if (!response.ok) {
            // Si el código de respuesta no está en el rango 200-299, se lanza un error
            throw new Error('Personaje no encontrado');
        }
        let data = await response.json();
        return data
    }
    catch {
        (error) => console.log("hubo un error" + error)
    };
}
//getRandomPokemon().then((data) => console.log(pokemon))



//Ejercicio 2.- Declara una funcion getImageAndName que retorne el nombre y 
//la URL de la imagen de un pokemon => (return {img, name})

async function getImageAndName(pokemon) {
    try {

        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        if (!response.ok) {
            // Si el código de respuesta no está en el rango 200-299, se lanza un error
            throw new Error('Personaje no encontrado');
        }
        let data = await response.json();
        let name = data.name;
        let img = data.sprites.front_default;
        return { name, img }
    }
    catch {
        (error) => console.log("hubo un error" + error)
    };
}

//Ejercicio 3.- Declara una funcion **printImageAndName** que retorne el string necesario 
//para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:

async function printImageAndName() {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        if (!response.ok) {
            // Si el código de respuesta no está en el rango 200-299, se lanza un error
            throw new Error('Personaje no encontrado');
        }
        let data = await response.json();
        let name = data.name;
        let img = data.sprites.front_default

        return `<section>
    <img src=${img} alt="nombre del pokemon">
    <h1>${name}</h1>
</section>`
    }
    catch {
        (error) => console.log("hubo un error" + error)
    };
}

//Ejercicio 4.- Declara una función **getRandomDogImage** que retorne la url de la imagen de un perro aleatorio

async function getRandomDogImage() {
    try {
        let response = await fetch("https://dog.ceo/api/breeds/image/random")
        let data = await response.json();
        let url = data.message;
        return url
    }
    catch {
        (err => console.log("ERROR!: " + err.message))
    }
}
console.log(getRandomDog().then(result => console.log(result)))

//Ejercicio 5.- Declara una función getRandomPokemonImage que retorne la url de la imagen de un pokemon aleatorio.
async function getRandomPokemonImage() {

    let randomIndex = Math.floor(Math.random() * 20) + 1;
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomIndex}`)
        if (!response.ok) {
            // Si el código de respuesta no está en el rango 200-299, se lanza un error
            throw new Error('Personaje no encontrado');
        }
        let data = await response.json();
        let img = data.sprites.front_default;
        return img
    }
    catch {
        (error) => console.log("hubo un error" + error)
    }
};

//Ejercicio 6.- Declara una función printPugVsPikachu que pinte la batalla entre "Pug" y "Pikachu" (no se testea)

async function printPugVsPikachu() {
    const PikachuURL= `https://pokeapi.co/api/v2/pokemon/pikachu`
    const PugURL= `https://dog.ceo/api/breed/pug/images/random`
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
}

https://dog.ceo/api/breed/pug/images/random

pikachu = "";
pug = "";

Promise.all([
    fetch(rickMortyURL).then((res) => res.json()),
    fetch(pokeURL).then((res) => res.json()),
]).then((data) => {
    const rickMortyData = data[0];
    const pokemonData = data[1];
    console.log(data[0]);
    console.log(data[1]);
    datos0 = data[0];
    datos1 = data[1];
})