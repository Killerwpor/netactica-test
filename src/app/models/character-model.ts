import { Movie } from "./movie-model";

export interface Character {
    name: string,
    eyeColor: string,
    gender: string,
    films: Movie[],
}