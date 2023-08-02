const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const pokemonInside = document.getElementById('inside-pokemon');
console.log(pokemonInside)

pokeApi.getInsidePokemon(id).then((pokemon) => {
  pokemonInside.innerHTML = convertPokemonToHtml(pokemon)
  console.log(pokemon)
  


})

function convertPokemonToHtml(pokemon){
  return `    <section class="container ${pokemon.type}" id="poke">
  <div class="header">
      <h1 class="name">${pokemon.name}</h1>
      <h3 class="number">#${pokemon.number}</h3>
      <ol class="types">
        ${pokemon.types.map((type)=>`<li class="type ${type}">${type}</li>`).join('')}
       </ol>
  </div>
  <div class="photo">
      <img src="${pokemon.photo}" alt="">
  </div>
  <section class="base-stats">
      <h1>Base Stats</h1>
      <div class="stats">
          <ul class="name-stats">
              <li>HP</li>
              <li>Attack</li>
              <li>Defense</li>
              <li>Sp.attack</li>
              <li>Sp.defense</li>
              <li>Speed</li>
          </ul>
          <ul class="number-stats">
              ${pokemon.stats.map((stat)=>`<li>${stat}</li>`).join('')}
          </ul>
          <ul class="bars-stats">
            ${pokemon.stats.map((stat)=>`<li><div class="prograss-bar"><div style="width: ${stat}%;"></div></div></li>`).join('')}
          </ul>
      </div>
      <div class="pagination">
      <a href="index.html">
          <button id="loadMore" type="button">
              NEXT
          </button>
      </a>
  </div>
  </section>
  
</section>

`
}


