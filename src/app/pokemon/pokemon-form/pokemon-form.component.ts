import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon : Pokemon; 
  types : string [];
  
  constructor(private router : Router,
    private pokemonService : PokemonService) { }

  ngOnInit(){
    this.types = this.pokemonService.getPokemonTypes();
  }

  onSubmit(){
    console.log("Submit form")
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }

  hasType(type: string): boolean{
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event , type: string){
    const isChecked : boolean = ($event.target as HTMLInputElement).checked;
    if(isChecked){
      this.pokemon.types.push(type)
    }else{
      const index : number = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type: string): boolean{
    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    }
    else if(this.pokemon.types.length >2 && !this.hasType(type)){
      return false;
    }else{
      return true;
    }
  }


}
