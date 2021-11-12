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
}