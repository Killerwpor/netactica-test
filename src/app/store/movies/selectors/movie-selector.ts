import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovieState } from "../movies-state";
import { movieFeatureKey } from "../reducers/movie-reducer";

export const selectMovies = createFeatureSelector<MovieState>(movieFeatureKey);

export const selectAllMovies = createSelector(
    selectMovies,
    (state: MovieState) => state.movies
);

export const selectSpecificMovie = createSelector(
    selectMovies,
    (state: MovieState, id: string) => state.movies.filter((i) => i.episode_id == id)
);

export const selectMovieSelected = createSelector(
    selectMovies,
    (state: MovieState) => state.movieSelected
);