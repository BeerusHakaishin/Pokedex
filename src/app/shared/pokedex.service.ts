import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon.model';

@Injectable({
  providedIn: 'root',
})

export class PokedexService {

  //////////////////////////////////// Interargir avec son Api  ////////////////////////////////////
    
  private readonly POKEMON_MYAPI_URL= 'api/pokemons.json';

  // En readonly pour préciser que l'on doit lire que cette valeur là
  // Ceci est un chemin d'accès direct pour un appel d'API,
  // Pour que cela soit reconnu par Angular nous devons ajouter 
  // Dans le fichier angular.json , dans le build ,plus précisement dans le array "assets":[],
  // Ajouter ceci : "src/api/pokemons.json" et voilà , pour le moment seulement ;)

  //////////////////////////////////// 2ème Etape  ////////////////////////////////////
  // Car Afin de pouvoir envoyer des données à ton api et que celle ci t'affiche ce que tu lui as gentillement envoyé
  // Tu va devoir telecharger le package npm angular-in-memory-web-api "npm install angular-in-memory-web-api --save"
  // voici la doc officielle pour t'aider : https://angular.io/tutorial/toh-pt6 , good luck and get lucky ;)
  
  constructor(private http: HttpClient) {}

  public getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.POKEMON_MYAPI_URL);
  }

  public addAPokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.POKEMON_MYAPI_URL, pokemon);
  }
}