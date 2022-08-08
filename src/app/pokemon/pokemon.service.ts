import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, of, tap } from "rxjs";

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>("api/pokemons").pipe(
      tap((pokemonList) => this.log(pokemonList)),
      catchError((error) => this.handleError(error, []))
    );
  }
  // refactoriser son code
  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.table(error);
    return of(errorValue);
  }
  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon | undefined>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  getPokemonTypes(): string[] {
    return [
      "Plante",
      "Feu",
      "Eau",
      "Insecte",
      "Normal",
      "Poison",
      "Vol",
      "Electrik",
      "Fée",
      "Combat",
    ];
  }


  updatePokemon(pokemon:Pokemon): Observable<Pokemon | undefined>  {
    // corps repars dans le  
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  deletePokemonById(pokemonId: number): Observable< Pokemon | undefined> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    
    );
  }

  searchPokemonList(term: string) : Observable<Pokemon[]> {
    if(term.length <= 1){
      return of([])
    }
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }
}
