import { createReducer, on } from "@ngrx/store";
import { getCharactersSuccess } from "../actions/characters-actions";
import { adapterCharacter, CharactersState } from "../character-state";
import { initialState } from "../character-state";

export const characterFeatureKey = "characters";

export const characterReducer = createReducer<CharactersState>(
    initialState,
    on(getCharactersSuccess, (state, { character }) =>
        adapterCharacter.addOne(character, { ...state })

    ),
)