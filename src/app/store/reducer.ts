import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { State } from "./state";
import { movieFeatureKey, movieReducer } from "./movies/reducers/movie-reducer";

export const reducers: ActionReducerMap<State> = {
    [movieFeatureKey]: movieReducer,
};

export const metaReducers: MetaReducer<State>[] = [];