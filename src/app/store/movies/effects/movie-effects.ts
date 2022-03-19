import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { MovieService } from "src/app/service/movie-service";
import { catchError, map, switchMap } from 'rxjs/operators';
import { fetchMovies, fetchMoviesFailed, fetchMoviesSuccess } from "../actions/movie-actions";

@Injectable()
export class MovieEffects {

    constructor(
        private readonly actions$: Actions,
        private readonly movieService: MovieService
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

}