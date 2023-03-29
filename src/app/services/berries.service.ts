import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { parseBerriesList, parseBerry } from '../pokemons/helpers';
import { Berry, List, RawBerry, RawList, SearchData } from '../pokemons/models';
const url = 'https://pokeapi.co/api/v2/berry';
@Injectable({
  providedIn: 'root',
})
export class BerriesService {
  constructor(private readonly http: HttpClient) {}
  getAll(searchData?: SearchData): Observable<List<Berry>> {
    return this.http
      .get<RawList<RawBerry>>(url, { params: searchData })
      .pipe(map((obj) => parseBerriesList(obj)));
  }
  get(id: string): Observable<Berry> {
    return this.http
      .get<RawBerry>(`${url}/${id}`)
      .pipe(map((obj) => parseBerry(obj)));
  }
}
