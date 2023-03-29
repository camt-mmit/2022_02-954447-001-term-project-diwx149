import {
  Ability,
  Berry,
  List,
  Pokemon,
  PokeType,
  RawAbility,
  RawBerry,
  RawList,
  RawPokemon,
  RawPokeType,
  RawSpecie,
  Specie,
} from './models';

export function parseList<I, O>(
  obj: RawList<I>,
  parser: (value: I) => O
): List<O> {
  return {
    ...obj,
    next: obj.next ? new URL(obj.next) : null,
    previous: obj.previous ? new URL(obj.previous) : null,
    results: obj.results.map((value) => parser(value)),
  };
}
//pokemons
export function parsePokemon(obj: RawPokemon): Pokemon {
  return {
    ...obj,
    // abilities: obj.abilities.map((value) => new URL(value)),
    // species: obj.species.map((value) => new URL(value)),
    url: obj.url != null || obj.url != undefined ? new URL(obj.url) : null,
  };
}

export function parsePokemonsList(obj: RawList<RawPokemon>): List<Pokemon> {
  return parseList(obj, parsePokemon);
}
//species
export function parseSpecie(obj: RawSpecie): Specie {
  return {
    ...obj,
    // abilities: obj.abilities.map((value) => new URL(value)),
    // species: obj.species.map((value) => new URL(value)),
    url: obj.url != null || obj.url != undefined ? new URL(obj.url) : null,
  };
}

export function parseSpeciesList(obj: RawList<RawSpecie>): List<Specie> {
  return parseList(obj, parseSpecie);
}
//Abilities
export function parseAbility(obj: RawAbility): Ability {
  return {
    ...obj,
    // abilities: obj.abilities.map((value) => new URL(value)),
    // species: obj.species.map((value) => new URL(value)),
    url: obj.url != null || obj.url != undefined ? new URL(obj.url) : null,
  };
}

export function parseAbilitiesList(obj: RawList<RawAbility>): List<Ability> {
  return parseList(obj, parseAbility);
}
//Type
export function parsePokeType(obj: RawPokeType): PokeType {
  return {
    ...obj,
    // abilities: obj.abilities.map((value) => new URL(value)),
    // species: obj.species.map((value) => new URL(value)),
    url: obj.url != null || obj.url != undefined ? new URL(obj.url) : null,
  };
}

export function parsePokeTypesList(obj: RawList<RawPokeType>): List<PokeType> {
  return parseList(obj, parsePokeType);
}
//Berry
export function parseBerry(obj: RawBerry): Berry {
  return {
    ...obj,
    // abilities: obj.abilities.map((value) => new URL(value)),
    // species: obj.species.map((value) => new URL(value)),
    url: obj.url != null || obj.url != undefined ? new URL(obj.url) : null,
  };
}

export function parseBerriesList(obj: RawList<RawBerry>): List<Berry> {
  return parseList(obj, parseBerry);
}
