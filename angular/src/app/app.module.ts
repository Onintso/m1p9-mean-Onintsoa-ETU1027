import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { ModifierComponent } from './modifier/modifier.component';

import { FormsModule } from '@angular/forms';
import { AjoutComponent } from './ajout/ajout.component'; // DONT FORGET [ngModel]
import { ListeJoueursComponent } from './components/liste-joueurs/liste-joueurs.component';
import { SearchComponent } from './components/search/search.component';
import { ListPlatComponent } from './components/list-plat/list-plat.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ModifierComponent,
    AjoutComponent,
    ListeJoueursComponent,
    SearchComponent,
    ListPlatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    FormsModule // without this ngModel is not gonna work
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
