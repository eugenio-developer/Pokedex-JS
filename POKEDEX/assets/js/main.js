const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMore')
const pokemonDetail = document.getElementById('pages');
let id;
let pokeID = ''

const limit = 12;
let offset = 0;
const maxRecords =	386;


function convertPokemonToHtml(pokemon){

    return `<a href="pokemon.html?id=${pokemon.number}"><li class="pokemon ${pokemon.type}" id="${pokemon.number}" onclick="getId(${pokemon.number})">
    <span class="number" id="id">#${pokemon.number}</span>
    <span class="name">${(pokemon.name).toUpperCase()}</span>
    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type)=>`<li class="type ${type}">${type}</li>`).join('')}
        </ol>

        <img src="${pokemon.photo}" alt="${pokemon.name}">
    </div>
    </li></a>`
}

function  loadPokemonItens(offset, limit){
    pokeApi.getPokemon(offset, limit).then((pokemons) => {

        pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join('');
    

    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () =>{

    offset += limit;
    const qtdRecordNextPage = offset + limit;
    if(qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    }
    else{
        loadPokemonItens(offset,limit);
    
    }
})





