import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { State } from "./state";
import { movieFeatureKey, movieReducer } from "./movies/reducers/movie-reducer";
import { characterFeatureKey, characterReducer } from "./characters/reducer/character-reducer";

export const reducers: ActionReducerMap<State> = {
    [movieFeatureKey]: movieReducer,
    [characterFeatureKey]: characterReducer,
};

export const metaReducers: MetaReducer<State>[] = [];