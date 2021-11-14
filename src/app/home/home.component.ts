import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../shared/pokedex.service';
import { Pokemon } from '../shared/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  pokemons: any;
  pokemon: Pokemon | undefined;
  
  constructor(private pokedexService: PokedexService) {

    this.pokedexService.getPokemons().subscribe((data) => {
      this.pokemons = data;   
    });
  }
  
  receivePokemon(pokemon: Pokemon): void {
    this.pokemon = pokemon;
  }

  ngOnInit(): void {}
}
