import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './store/movies';
import { MovieService } from './service/movie-service';
import { HttpClientModule } from '@angular/common/http';
import { metaReducers, reducers } from './store';
import { CharacterEffects } from './store/characters';
import { CharacterService } from './service/character-service';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListCharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers, }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([MovieEffects, CharacterEffects]),
    HttpClientModule,
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
  ],
  providers: [MovieService, CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
