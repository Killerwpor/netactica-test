import { Character } from "src/app/models/character-model";

export interface CharactersState {
    characters: Character[];
}

export const initialState: CharactersState = {
    characters: [],
}