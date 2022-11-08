
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToHtml(pokemon) {
   return `
   <li class="pokemon">
   <span class="number">001</span>
   <span class="nome">${pokemon.name}</span>

   <div class="detail">
       <ol class="types">
           <li class="type">grass</li>
           <li class="type">poison</li>
       </ol>
       <img src="https://static.wikia.nocookie.net/pokedex/images/2/24/Bubassaur.png/revision/latest?cb=20141012190624&path-prefix=pt-br"
           alt="${pokemon.name}">
   </div>
</li>
   
   `

}

const pokemonList = document.getElementById('pokemonList')

fetch(url)
   .then((response) => response.json())
   .then((jsonBody) => jsonBody.results)
   .then((pokemons) => {
     
     for (let i = 0; i < pokemons.length; i++) {
      const pokemon = pokemons[i];
      pokemonList.innerHTML += convertPokemonToHtml(pokemon)
      
     }     
      
   })
   .catch((error) => console.error(error))


  