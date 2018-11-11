function pokemonBattle(pokemon1, pokemon2){
  if (pokemon1 === "eeve" && pokemon2 === "eeve"){
    throw new Error ("Os pokemons sao iguais")
  } else if (pokemon1 === "vaporeon" && pokemon2 === "vaporeon") {
    throw new Error ("Os pokemons sao iguais");
  } else if(pokemon1 === "graveler" && pokemon2 === "graveler") {
    throw new Error ("Os pokemons sao iguais")
  }
  if (pokemon1 === "graveler"){
    if(pokemon2 === "eeve"){
      return "graveler";
    }
  }else if(pokemon1 === "eeve"){
    if (pokemon2 === "graveler"){
      return "graveler";
    }else if(pokemon1 === "eeve"){
      if (pokemon2 === "graveler"){
        return "graveler";

  }
  throw new Error ("tem um pokemon não cadastrado");
}

module.exports.pokemonBattle = pokemonBattle;
