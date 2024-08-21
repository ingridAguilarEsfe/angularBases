import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListPersonajesComponent } from './components/list-personajes/list-personajes.component';
import { AddPersonajesComponent } from './components/add-personajes/add-personajes.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    ListPersonajesComponent,
    AddPersonajesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    MainPageComponent
  ]
})
export class DbzModule {}

