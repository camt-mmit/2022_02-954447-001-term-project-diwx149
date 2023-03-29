import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { parseSpecie, parseSpeciesList } from '../pokemons/helpers';
import {
  List,
  RawList,
  RawSpecie,
  SearchData,
  Specie,
} from '../pokemons/models';
const url = 'https://pokeapi.co/api/v2/pokemon-species';
@Injectable({
  providedIn: 'root',
})
export class SpeciesService {
  constructor(private readonly http: HttpClient) {}
  getAll(searchData?: SearchData): Observable<List<Specie>> {
    return this.http
      .get<RawList<RawSpecie>>(url, { params: searchData })
      .pipe(map((obj) => parseSpeciesList(obj)));
  }
  get(id: string): Observable<Specie> {
    return this.http
      .get<RawSpecie>(`${url}/${id}`)
      .pipe(map((obj) => parseSpecie(obj)));
  }
}
