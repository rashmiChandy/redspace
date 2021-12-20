import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';

// Common Module with all Material modules which will be shared and reused across the application
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatExpansionModule,
    MatToolbarModule
  ], 
  exports:[
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatExpansionModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
