import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { parseAbilitiesList, parseAbility } from '../pokemons/helpers';
import {
  Ability,
  List,
  RawAbility,
  RawList,
  SearchData,
} from '../pokemons/models';
const url = 'https://pokeapi.co/api/v2/ability';
@Injectable({
  providedIn: 'root',
})
export class AbilitiesService {
  constructor(private readonly http: HttpClient) {}
  getAll(searchData?: SearchData): Observable<List<Ability>> {
    return this.http
      .get<RawList<RawAbility>>(url, { params: searchData })
      .pipe(map((obj) => parseAbilitiesList(obj)));
  }
  get(id: string): Observable<Ability> {
    return this.http
      .get<RawAbility>(`${url}/${id}`)
      .pipe(map((obj) => parseAbility(obj)));
  }
}
