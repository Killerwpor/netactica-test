import { Movie } from "src/app/models/movie-model";

export interface MovieState {
    movies: Movie[];
    movieSelected: string
}

export const initialState: MovieState = {
    movies: undefined,
    movieSelected: undefined,
}