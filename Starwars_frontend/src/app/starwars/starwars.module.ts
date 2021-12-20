import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarwarsRoutingModule } from './starwars-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { CustomFilterPipe } from '../pipes/custom-filter.pipe';



@NgModule({
  declarations: [
    CharactersComponent,
    CharacterDetailsComponent,
    CustomFilterPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    StarwarsRoutingModule
  ]
})
export class StarwarsModule { }
