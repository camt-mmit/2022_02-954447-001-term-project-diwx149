import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { parsePokeType, parsePokeTypesList } from '../pokemons/helpers';
import {
  List,
  PokeType,
  RawList,
  RawPokeType,
  SearchData,
} from '../pokemons/models';
const url = 'https://pokeapi.co/api/v2/type';
@Injectable({
  providedIn: 'root',
})
export class PoketypesService {
  constructor(private readonly http: HttpClient) {}
  getAll(searchData?: SearchData): Observable<List<PokeType>> {
    return this.http
      .get<RawList<RawPokeType>>(url, { params: searchData })
      .pipe(map((obj) => parsePokeTypesList(obj)));
  }
  get(id: string): Observable<PokeType> {
    return this.http
      .get<RawPokeType>(`${url}/${id}`)
      .pipe(map((obj) => parsePokeType(obj)));
  }
}
