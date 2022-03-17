import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListCharactersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
