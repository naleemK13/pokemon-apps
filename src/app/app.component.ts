import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] =  POKEMONS;
  pokemonSelected: Pokemon|undefined;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.table(this.pokemonList);
  }

  selectPokemon(pokemon:Pokemon){
    if(pokemon){
      this.pokemonSelected = pokemon;
      console.log(`Vous avez demandé le pokemon ${pokemon.name}`);
    }else{
      this.pokemonSelected = pokemon;
      console.log(`Vous avez démandé un pokémon qui n'existe pas`);
    }
  }
}
