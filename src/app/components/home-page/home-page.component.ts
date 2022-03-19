import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/models/movie-model';
import { fetchMovies } from 'src/app/store/movies';
import { selectAllMovies } from 'src/app/store/movies/selectors/movie-selector';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  cardSelected: number;
  movies$: Observable<Movie[]> = of();

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(fetchMovies());
    this.getSelectors();
  }

  getSelectors(): void {
    this.movies$ = this.store.select(selectAllMovies);
  }

  changeText(id: number): void {
    this.cardSelected = id;
  }

}
