import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PokedexService } from '../shared/pokedex.service';
import { Pokemon } from '../shared/pokemon.model';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css'],
})

export class CreatePokemonComponent implements OnInit {

  sendNewPokemonForm = this.fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
    weakness: ['', Validators.required],
    link: ['', Validators.required],
    evolution: [''],
  });

  constructor(private fb: FormBuilder,private pokedexService: PokedexService){}

  ngOnInit(): void {}

  addAPokemon(): void{
    console.log(this.sendNewPokemonForm.value);

    this.pokedexService
      .addAPokemon(this.sendNewPokemonForm.value as Pokemon)
      .subscribe();
  }
}
