import { ActionReducerMap } from "@ngrx/store";
import { characterFeatureKey, characterReducer, CharactersState } from "./characters";
import { movieFeatureKey, movieReducer } from "./movies";
import { MovieState } from "./movies/movies-state";

export interface State {
    [movieFeatureKey]: MovieState,
    [characterFeatureKey]: CharactersState
}

export const rootReducers: ActionReducerMap<State> = {
    [movieFeatureKey]: movieReducer,
    [characterFeatureKey]: characterReducer
};
