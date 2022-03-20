import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/models/movie-model';
import { fetchMovies, selectMovie } from 'src/app/store/movies';
import { selectMoviesAll } from 'src/app/store/movies/selectors/movie-selector';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  cardSelected: number;
  movies$: Observable<Movie[]> = of();
  movie$: Observable<Movie[]> = of();


  constructor(private readonly store: Store, public router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(fetchMovies());
    this.getSelectors();
  }

  getSelectors(): void {
    this.movies$ = this.store.select(selectMoviesAll);
  }

  changeText(id: number): void {
    this.cardSelected = id;


  }

  selectMovie(id: string): void {
    this.store.dispatch(selectMovie({ movieSelected: id }));
  }

}
