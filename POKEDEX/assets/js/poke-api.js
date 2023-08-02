
const pokeApi={};

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;
    const types = pokeDetail.types.map((typeSlot)=>typeSlot.type.name);
    const [type]=types
    pokemon.types = types;
    pokemon.type =type;
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    const stats = pokeDetail.stats.map((statsSlot)=>statsSlot.base_stat)
    pokemon.stats = stats
    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}


pokeApi.getPokemon = function(offset = 0, limit=20){

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequest) => Promise.all(detailRequest))
    .then((pokemonsDetail)=>pokemonsDetail)
}

pokeApi.getInsidePokemon = function(id){
    const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
    .then((response) => response.json())
    .then((convertPokeApiDetailToPokemon))
}




