import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonModule } from '../pokemon.module';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {
  pokemon : Pokemon|undefined;
  constructor(
    private route : ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get("id");
    if(pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }

}
