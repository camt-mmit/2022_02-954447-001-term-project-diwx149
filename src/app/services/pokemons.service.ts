import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  List,
  Pokemon,
  RawList,
  RawPokemon,
  SearchData,
} from '../pokemons/models';
import { parsePokemon, parsePokemonsList } from '../pokemons/helpers';
const url = 'https://pokeapi.co/api/v2/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private readonly http: HttpClient) {}
  getAll(searchData?: SearchData): Observable<List<Pokemon>> {
    return this.http
      .get<RawList<RawPokemon>>(url, { params: searchData })
      .pipe(map((obj) => parsePokemonsList(obj)));
  }
  get(id: string): Observable<Pokemon> {
    return this.http
      .get<RawPokemon>(`${url}/${id}`)
      .pipe(map((obj) => parsePokemon(obj)));
  }
}
