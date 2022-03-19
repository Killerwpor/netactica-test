import { movieFeatureKey } from "./movies";
import { MovieState } from "./movies/movies-state";

export interface State {
    [movieFeatureKey]: MovieState
}