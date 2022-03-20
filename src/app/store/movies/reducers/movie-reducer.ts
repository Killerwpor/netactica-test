import { createReducer, on } from "@ngrx/store";
import { fetchMoviesSuccess, selectMovie } from "../actions/movie-actions";
import { adapterMovies, initialState, MovieState } from "../movies-state";

export const movieFeatureKey = "movies";

export const movieReducer = createReducer<MovieState>(
    initialState,
    on(fetchMoviesSuccess, (state, { movieList }) =>
        adapterMovies.addMany(movieList, {
            ...state,
        })
    ),
    on(selectMovie, (state, { movieSelected }) => ({
        ...state,
        movieSelected
    })),
)
