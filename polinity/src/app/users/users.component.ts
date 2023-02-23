import { CharacterModel } from './../model/character.model';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { iif, of, Observable, from, throwError } from 'rxjs';
import { PageableInfoModel } from '../model/characters.response';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private usersService: UsersService) {}
  search = new FormControl("");
  title = 'pagination';
  characters!: CharacterModel[];
  pageableInfo!: PageableInfoModel;
  page: number = 1;
  count: number = 0;
  tableSize: number = 20;
  
  ngOnInit(): void {
    this.usersService.getApi().pipe(
      switchMap(() => {
        return this.getCharacters();
      }),
    ).subscribe();
    // this.PostsOne();
    this.search.valueChanges
    .pipe(debounceTime(500),
    map(val => val?.trim()),
    distinctUntilChanged(),
    mergeMap(val => iif(() => (val || '').length > 3, of(val), throwError(() => val))),
     mergeMap(val => this.getCharacters({name: val}))
    )
    .subscribe();
  }

  getCharacters(filters?: {name?: string}, customUrl?: string| null) {
    return this.usersService.getAllCharacters(filters, customUrl).pipe(
      tap(
        response=>{
          this.characters = response.results;
          this.pageableInfo = response.info;
        }
      )
    );
  }

  getCharactersByUrl(url?: string | null) {
    this.getCharacters({}, url).subscribe();
  }
}