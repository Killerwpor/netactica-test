import { createAction, props } from "@ngrx/store";
import { Character } from "src/app/models/character-model";

export const getCharacter = createAction(
    "[Characters/API] get character",
    props<{ id: string }>()
);

export const getCharactersSuccess = createAction(
    "[Characters/API] get character success",
    props<{ character: Character }>()
);

export const gethCharactersFailed = createAction(
    "[Characters/API] get character failed"
);