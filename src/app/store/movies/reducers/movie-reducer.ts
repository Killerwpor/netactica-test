import { createReducer, on } from "@ngrx/store";
import { fetchMoviesSuccess } from "../actions/movie-actions";
import { initialState, MovieState } from "../movies-state";

export const movieFeatureKey = "movies";

export const movieReducer = createReducer<MovieState>(
    initialState,
    on(fetchMoviesSuccess, (state, { movieList }) => ({
        ...state,
        movies: movieList.map(({ episode_id, title, director, opening_crawl }) => ({
            episode_id, title, director, opening_crawl
        }))
    }))
)