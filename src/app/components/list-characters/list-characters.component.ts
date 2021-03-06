import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Character } from 'src/app/models/character-model';
import { Movie } from 'src/app/models/movie-model';
import { selectAllCharacters, selectCharactersLenght, selectCharactersPaginated } from 'src/app/store/characters';
import { getCharacter } from 'src/app/store/characters/actions/characters-actions';
import { selectMovie, selectMovieSelected, selectSpecificMovie } from 'src/app/store/movies';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit, OnDestroy {

  movie$: Observable<Movie[]> = of();
  test$: Observable<number> = of();
  characters$: Observable<Character[]> = of();
  charactersLength$: Observable<number> = of();
  private destroy: Subject<boolean> = new Subject<boolean>();


  constructor(private readonly store: Store, public router: Router,) {

  }


  ngOnInit(): void {
    this.getCharacters();
    this.charactersLength$ = this.store.select(selectCharactersLenght);
  }

  getCharacters(): void {

    this.store.select(selectMovieSelected).pipe(takeUntil(this.destroy)).subscribe((number) => {
      this.store.select(selectSpecificMovie, number).pipe(takeUntil(this.destroy)).subscribe((movie) => {
        if (!movie) {
          return this.router.navigate(['/home']);
        }
        movie[0].characters.forEach((e) => {
          this.store.dispatch(getCharacter({ id: e }))
        })
      })
    });

    this.characters$ = this.store.select(selectAllCharacters, { index: 0, end: 10 });

  }

  pageChanged(event: { page: number, itemsPerPage: number }): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.characters$ = this.store.select(selectCharactersPaginated, { index: startItem, end: endItem });

  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}


