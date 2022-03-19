import { createAction, props } from "@ngrx/store";
import { Movie } from "src/app/models/movie-model";

export const fetchMovies = createAction(
    "[Movies/API] Fetch movies"
);

export const fetchMoviesSuccess = createAction(
    "[Movies/API] Fetch movies success",
    props<{ movieList: Movie[] }>()
);

export const fetchMoviesFailed = createAction(
    "[Movies/API] Fetch movies failed"
);