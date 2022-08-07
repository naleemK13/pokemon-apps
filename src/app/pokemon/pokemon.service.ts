import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon'
import { POKEMONS } from './mock-pokemon-list'

@Injectable()
export class PokemonService {

  getPokemonList(): Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId)
  }

  getPokemonTypes(): string[]{
    const typesAll = POKEMONS.flatMap(pokemon => pokemon.types); // retrieve all types
    return [...new Set(typesAll)]; // retrieve unique values of an array
  }
}
