import { EntityAdapter, createEntityAdapter, EntityState } from "@ngrx/entity";
import { Character } from "src/app/models/character-model";

export interface CharactersState extends EntityState<Character> {
    characters: Character[];
}

export const adapterCharacter: EntityAdapter<Character> = createEntityAdapter<Character>({
    selectId: character => character.name
});

export const initialState: CharactersState = adapterCharacter.getInitialState({
    characters: [],
})