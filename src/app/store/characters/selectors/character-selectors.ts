import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Pagination } from "src/app/models/character-model";
import { CharactersState } from "../character-state";
import { characterFeatureKey } from "../reducer/character-reducer";


export const selectCharacters = createFeatureSelector<CharactersState>(characterFeatureKey);

export const selectAllCharacters = createSelector(
    selectCharacters,
    (state: CharactersState, pagination: Pagination) => state.characters.slice(pagination.index, pagination.end)
);

export const selectCharactersLenght = createSelector(
    selectCharacters,
    (state: CharactersState) => state.characters.length
);

export const selectCharactersPaginated = createSelector(
    selectCharacters,
    (state: CharactersState, pagination: Pagination) => state.characters.slice(pagination.index, pagination.end)
);
