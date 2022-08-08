import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styles: [
  ]
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;

  ngOnInit(){
    this.pokemon = new Pokemon();
  }


}
 