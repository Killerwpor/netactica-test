import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CharacterService } from "src/app/service/character-service";
import { getCharacter, getCharactersSuccess, gethCharactersFailed } from "../actions/characters-actions";

@Injectable()
export class CharacterEffects {

    constructor(
        private readonly actions$: Actions,
        private readonly characterService: CharacterService
    ) { }

    getCharacter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getCharacter),
            mergeMap((action) =>
                this.characterService.getCharacter(action.id).pipe(
                    map((data) => {
                        return getCharactersSuccess({ character: data })
                    }),
                    catchError(error => of(gethCharactersFailed()))
                )
            )
        )
    );

}