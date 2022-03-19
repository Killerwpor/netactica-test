import { Movie } from "src/app/models/movie-model";

export interface MovieState {
    movies: Movie[];
}

export const initialState: MovieState = {
    movies: undefined
}