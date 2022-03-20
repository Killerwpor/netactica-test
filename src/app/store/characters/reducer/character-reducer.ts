import { createReducer, on } from "@ngrx/store";
import { selectMovie } from "../../movies/actions/movie-actions";
import { getCharactersSuccess } from "../actions/characters-actions";
import { CharactersState } from "../character-state";
import { initialState } from "../character-state";

export const characterFeatureKey = "characters";

export const characterReducer = createReducer<CharactersState>(
    initialState,
    on(getCharactersSuccess, (state, { character }) => ({
        ...state,
        characters: [...state.characters, {
            gender: character.gender, eye_color: character.eye_color, name: character.name, films: character.films.map((link) => {
                return link.slice(link.length - 3, link.length - 2) != '/' ? link.slice(link.length - 3, link.length - 1)! : link.slice(link.length - 2, link.length - 1)
            })
        }]
    })),
    on(selectMovie, (state) => ({
        ...state,
        characters: []
    })),
)