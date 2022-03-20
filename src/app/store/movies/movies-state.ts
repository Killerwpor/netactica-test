import { EntityAdapter, createEntityAdapter, EntityState } from "@ngrx/entity";
import { Movie } from "src/app/models/movie-model";

export interface MovieState extends EntityState<Movie> {
    movies: Movie[];
    movieSelected: string
}

export const adapterMovies: EntityAdapter<Movie> = createEntityAdapter<Movie>({
    selectId: movie => movie.url
});

export const initialState: MovieState = adapterMovies.getInitialState({
    movies: undefined,
    movieSelected: undefined,
})