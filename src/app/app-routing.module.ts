import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePokemonComponent } from './create-pokemon/create-pokemon.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'create',
    component: CreatePokemonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

