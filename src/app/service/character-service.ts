import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from '../enums/endpoints.enum';
import { Character } from '../models/character-model';


@Injectable()
export class CharacterService {

    private readonly apiUrl = "https://swapi.dev/api/";

    constructor(private readonly _http: HttpClient) {
    }

    getCharacter(id: string): Observable<Character> {
        return this._http.get<Character>(
            `${this.apiUrl}${Endpoints.GETCHARACTER}${id}`
        );
    }
}
