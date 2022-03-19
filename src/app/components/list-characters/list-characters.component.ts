import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from 'src/app/models/character-model';
import { Movie } from 'src/app/models/movie-model';
import { selectAllCharacters } from 'src/app/store/characters';
import { getCharacter } from 'src/app/store/characters/actions/characters-actions';
import { selectMovie, selectMovieSelected, selectSpecificMovie } from 'src/app/store/movies';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit {

  movie$: Observable<Movie[]> = of();
  test$: Observable<number> = of();
  characters$: Observable<Character[]> = of();



  constructor(private readonly store: Store) {

  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {

    this.store.select(selectMovieSelected).subscribe((number) => {
      this.store.select(selectSpecificMovie, number).subscribe((movie) => {
        movie[0].characters.forEach((e) => {
          console.log(e);
          this.store.dispatch(getCharacter({ id: e }))
        })
      })
    });

    this.characters$ = this.store.select(selectAllCharacters, { index: 0, end: 10 });

  }
}


