import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { LugaresComponent } from './lugares/lugares.component';
import { SociedadesComponent } from './sociedades/sociedades.component';



@NgModule({
  declarations: [
    SidebarComponent,
    PersonajesComponent,
    LugaresComponent,
    SociedadesComponent
  ],
  exports:[
    SidebarComponent,
    PersonajesComponent,
    LugaresComponent,
    SociedadesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
