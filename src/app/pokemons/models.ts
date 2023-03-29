type Raw<T, KI extends keyof T, O> = {
  [K in keyof T]: K extends KI ? O : T[K];
};

export type List<T> = {
  count: number;
  next: URL | null;
  previous: URL | null;
  results: T[];
};

export type RawList<T> = Raw<List<T>, 'next' | 'previous', string | null>;

export type SearchData = {
  search?: string;
  offset?: string;
  limit?: string;
};
//pokemons
export type Pokemon = {
  id: string;
  name: string;
  base_experience: string;
  height: string;
  weight: string;
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  species: {
    name: string;
  };
  types: [
    {
      type: { name: string };
    }
  ];
  url: URL | null;
};

export type RawPokemon = Raw<
  Raw<Raw<Pokemon, 'url', string>, 'height' | 'weight', string>,
  'id' | 'base_experience',
  string
>;
//species
export type Specie = {
  id: string;
  name: string;
  order: string;
  gender_rate: string;
  capture_rate: string;
  base_happiness: string;
  growth_rate: {
    name: string;
  };
  color: {
    name: string;
  };
  shape: {
    name: string;
  };
  generation: {
    name: string;
  };
  url: URL | null;
};

export type RawSpecie = Raw<
  Raw<Raw<Specie, 'url', string>, 'name' | 'order', string>,
  'gender_rate' | 'base_happiness',
  string
>;
//Abilities
export type Ability = {
  id: string;
  name: string;

  generation: {
    name: string;
  };
  effect_entries: [
    {
      effect: string;
    }
  ];
  url: URL | null;
};

export type RawAbility = Raw<
  Raw<Raw<Ability, 'url', string>, 'id', string>,
  'name',
  string
>;
//Types
export type PokeType = {
  id: string;
  name: string;
  damage_relations: {
    no_damage_to: [
      {
        name: string;
      }
    ];
    half_damage_to: [
      {
        name: string;
      }
    ];
    double_damage_to: [
      {
        name: string;
      }
    ];
  };
  url: URL | null;
};

export type RawPokeType = Raw<
  Raw<Raw<PokeType, 'url', string>, 'id', string>,
  'name',
  string
>;
//Berry
export type Berry = {
  id: string;
  name: string;
  growth_time: string;
  max_harvest: string;
  natural_gift_power: string;
  size: string;
  smoothness: string;
  soil_dryness: string;
  url: URL | null;
};

export type RawBerry = Raw<
  Raw<Raw<Berry, 'url', string>, 'id', string>,
  'name',
  string
>;
