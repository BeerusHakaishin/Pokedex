import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePokemonComponent } from './create-pokemon/create-pokemon.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokedexService } from './shared/pokedex.service';

// Les 2 imports suivant sont primordiaux pour pouvoir stocker ce que tu envoie dans ton api via le formulaire !
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CreatePokemonComponent,
    HeaderComponent,
    HomeComponent,
    PokemonDetailsComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService), // N'oublie pas de l'importer ici 
  ],
  providers: [PokedexService],  // L'import classique de ton service dans l'array providers
  bootstrap: [AppComponent]
})
export class AppModule { }
