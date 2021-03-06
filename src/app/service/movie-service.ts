import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from '../enums/endpoints.enum';
import { MoviesApiResponse } from '../models/movie-model';


@Injectable()
export class MovieService {

    private readonly apiUrl = "https://swapi.dev/api/";

    constructor(private readonly _http: HttpClient) {
    }

    getMovies(): Observable<MoviesApiResponse> {
        return this._http.get<MoviesApiResponse>(
            `${this.apiUrl}${Endpoints.GETMOVIES}`
        );
    }
}
