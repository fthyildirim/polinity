import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, from, map, mergeMap, Observable, tap, throwError } from 'rxjs';
import { ApiModel } from './model/api.model';
import { CharactersResponse } from './model/characters.response';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = "https://rickandmortyapi.com/api/";
  api: ApiModel = {characters: '', episodes: '', locations: ''};
  charactersResponse!: CharactersResponse;
  constructor(private HttpClient:HttpClient) {}
  
  getApi(): Observable<ApiModel> {
    return this.HttpClient.get<ApiModel>(this.url).pipe(tap(result => {
      this.api = result;
    }));
  }

  getAllCharacters(filters: {name?: string; } = {}, customUrl?: string | null): Observable<CharactersResponse> {
    if(!this.api.characters && !customUrl) {
      return throwError(() => 'Url undefined');
    }
    return this.HttpClient.get<CharactersResponse>(customUrl || this.api.characters, {params: filters}).pipe(
      tap(result => {
        this.charactersResponse = result;
      })
    )
  }

}
