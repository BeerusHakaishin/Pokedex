import * as angularInMemoryWebApi from 'angular-in-memory-web-api';
import * as pokemonModel from './pokemon.model';
import * as pokemonsMock from './pokemons-mock';

// Importe tout le nécessaire * = all 

export class InMemoryDataService implements angularInMemoryWebApi.InMemoryDbService {

  createDb(): { pokemons: pokemonModel.Pokemon[]; } {
    const pokemons = pokemonsMock.POKEMONS;
    return { pokemons };
  }

  generateId(pokemon: pokemonModel.Pokemon[]): number {
      const newLocal = pokemon.length > 0
          ? Math.max(...pokemon.map((pokemon) => pokemon.id)) + 1
          : 1;
    return newLocal;
  }

  // La syntaxe de décomposition "..." permet de développer une expression lorsque plusieurs arguments
  // Ou plusieurs éléments sont nécessaires (respectivement
  // Pour les appels de fonctions et les littéraux de tableaux). 
  
  //An Example :

/*  
      function f(x, y, z) { }
        var args = [0, 1, 2];
        f.apply(null, args);

Avec la décomposition "...", on peut désormais écrire :

    function f(x, y, z) { }
        var args = [0, 1, 2];
        f(...args);
*/

}