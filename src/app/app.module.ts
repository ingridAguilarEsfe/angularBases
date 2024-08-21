import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContadorModule } from './contador/components/contador.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListComponent } from './heroes/list/list.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    HeroesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
