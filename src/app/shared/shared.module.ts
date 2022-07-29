import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CharactersComponent } from './characters/characters.component';



@NgModule({
  declarations: [
    SearchComponent,
    CharactersComponent
  ],
  exports:[
    SearchComponent,
    CharactersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
