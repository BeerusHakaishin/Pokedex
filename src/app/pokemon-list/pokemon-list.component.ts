import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Pokemon } from '../shared/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})

export class PokemonListComponent implements OnInit {

  @Input() public pokemon: Pokemon | undefined;

  public pokemonToSend: Pokemon | undefined;

  @Output() public sendPokemon: EventEmitter<Pokemon> = new EventEmitter();

  pokeForm = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  showPokemon(): void {
    this.pokemonToSend = this.pokeForm.value;
    this.sendPokemon.emit(this.pokemonToSend);
    this.pokeForm.reset();
  }
  
}