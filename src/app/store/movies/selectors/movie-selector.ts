import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapterMovies, MovieState } from "../movies-state";
import { movieFeatureKey } from "../reducers/movie-reducer";

export const selectMovies = createFeatureSelector<MovieState>(movieFeatureKey);


export const {
    selectAll: selectMoviesAll,
    selectIds: selectMovieIds,
    selectEntities: selectMoviesEntities,
} = adapterMovies.getSelectors(selectMovies);

export const selectSpecificMovie = createSelector(
    selectMoviesEntities,
    (entities, id: string) => {
        return entities[id];
    }
);

export const selectMovieSelected = createSelector(
    selectMovies,
    (state: MovieState) => state.movieSelected
);