import { createReducer, on } from "@ngrx/store";
import { fetchMoviesSuccess, selectMovie } from "../actions/movie-actions";
import { initialState, MovieState } from "../movies-state";

export const movieFeatureKey = "movies";

export const movieReducer = createReducer<MovieState>(
    initialState,
    on(fetchMoviesSuccess, (state, { movieList }) => ({
        ...state,
        movies: movieList.map(({ episode_id, title, director, opening_crawl, characters }) => ({
            episode_id, title, director, opening_crawl, characters: characters.map((link) => {
                return link.slice(link.length - 3, link.length - 2) != '/' ? link.slice(link.length - 3, link.length - 1)! : link.slice(link.length - 2, link.length - 1)
            })
        }))
    })),
    on(selectMovie, (state, { movieSelected }) => ({
        ...state,
        movieSelected
    })),

)