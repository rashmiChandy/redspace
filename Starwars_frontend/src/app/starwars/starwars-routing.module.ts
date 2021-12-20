import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  {path:'', component:CharactersComponent},
  {path:'details/:id',component:CharacterDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarwarsRoutingModule { }
