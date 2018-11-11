var chai = require("chai");
var expect = chai.expect;
var pokemon = require("./pokemon");

describe("pokemon", () => {
  describe("#pokemonBattle", () => {
    describe("Quando nâo for nenhum deos pokemons cadastrados", () => {
      it("deve me retornar um erro", () => {
        var badFn = function () { pokemon.pokemonBattle("pikachu", "eeve")};
        expect(badFn).to.throw("tem um pokemon não cadastrado");
      });
    });
    describe("Quando os pokemons forem iguais", () => {
      it("deve me retornar um erro", () => {
        var badFn = function () { pokemon.pokemonBattle("eeve", "eeve")};
        });
        var badFn2 = function () { pokemon.pokemonBattle("graveler", "graveler")};
        });
        var badFn3 = function () { pokemon.pokemonBattle("vaporeon", "vaporeon")};
        });
        expect(badFn).to.throw("Os pokemons sao iguais");
        expect(badFn2).to.throw("Os pokemons sao iguais");
        expect(badFn3).to.throw("Os pokemons sao iguais");
      });
    });

    describe("Quando graveler lutar contra o eeve", () => {
      it("deve me retornar graveler", () => {
        expect( pokemon.pokemonBattle("graveler", "eeve").to.equal("graveler");
      });
    });
    describe("Quando graveler lutar contra o vaporeon", () => {
      it("deve me retornar graveler", () => {
        expect( pokemon.pokemonBattle("eeve", "vaporeon").to.equal("eeve");
      });
    });
  });
});


// Quando nao for nenhum desses pokemons
//
// Quando pokemons forem iguais
//

// "gravelel"
// "eeve"
// "vaporion"
//
// gravelar ganha do eeve
// eeve ganha do vaporion
// vaporion ganha do graveler
//
// describe("description", function ()){
//
// }
// function pokemonBattle(pokemon1, pokemon2){
//
// }
//
// try{
//
// }catch{
//
// }
