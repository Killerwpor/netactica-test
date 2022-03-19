import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { MovieService } from "src/app/service/movie-service";
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { fetchMovies, fetchMoviesFailed, fetchMoviesSuccess, selectMovie } from "../actions/movie-actions";
import { Router } from "@angular/router";

@Injectable()
export class MovieEffects {

    constructor(
        private readonly actions$: Actions,
        private readonly movieService: MovieService,
        public router: Router,
    ) { }

    categoriesActive$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchMovies),
            switchMap(() =>
                this.movieService.getMovies().pipe(
                    map((data) => {
                        return fetchMoviesSuccess({ movieList: data.results })
                    }),
                    catchError(error => of(fetchMoviesFailed()))
                )
            )
        )
    );

    movieSelected$ = createEffect(() =>
        this.actions$.pipe(
            ofType(selectMovie),
            tap(() => this.router.navigate(['/list']),
            )
        ),
        { dispatch: false });

}