import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {
  searchTerms = new Subject<string>(); // stocker les recherches successives dans un arr dans le temps
  // construire le flux de donnees provenant du server
  // recherche dynamique dans un terme de recherche
  pokemons$: Observable<Pokemon[]>; // e

  constructor(
    private route  : Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(){
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),// attendre qu'il est des changements dans les termes de recherches
      switchMap((term) => this.pokemonService.searchPokemonList(term))  
    ); 

  }
  search(term: string){
    // renvoie les termes de recherches envoyes
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon){
    const link = ['/pokemon', pokemon.id];
    this.route.navigate(link);
  }

}
