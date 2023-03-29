import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { InfoComponent } from './app/pokemons/info/info.component';
import { AbilitiesListPageComponent } from './app/pokemons/router/abilities/abilities-list-page/abilities-list-page.component';
import { AbilityViewPageComponent } from './app/pokemons/router/abilities/ability-view-page/ability-view-page.component';
import { BerriesListPageComponent } from './app/pokemons/router/berries/berries-list-page/berries-list-page.component';
import { BerryViewPageComponent } from './app/pokemons/router/berries/berry-view-page/berry-view-page.component';
import { PokemonViewPageComponent } from './app/pokemons/router/pokemons/pokemon-view-page/pokemon-view-page.component';
import { PokemonsListPageComponent } from './app/pokemons/router/pokemons/pokemons-list-page/pokemons-list-page.component';
import { PoketypeViewPageComponent } from './app/pokemons/router/poketypes/poketype-view-page/poketype-view-page.component';
import { PoketypesListPageComponent } from './app/pokemons/router/poketypes/poketypes-list-page/poketypes-list-page.component';
import { SpecieViewPageComponent } from './app/pokemons/router/species/specie-view-page/specie-view-page.component';
import { SpeciesListPageComponent } from './app/pokemons/router/species/species-list-page/species-list-page.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
      { path: 'pokemons', component: PokemonsListPageComponent },
      { path: 'pokemons/:id', component: PokemonViewPageComponent },

      { path: 'species', component: SpeciesListPageComponent },
      { path: 'species/:id', component: SpecieViewPageComponent },

      { path: 'abilities', component: AbilitiesListPageComponent },
      { path: 'abilities/:id', component: AbilityViewPageComponent },

      { path: 'types', component: PoketypesListPageComponent },
      { path: 'types/:id', component: PoketypeViewPageComponent },

      { path: 'berries', component: BerriesListPageComponent },
      { path: 'berries/:id', component: BerryViewPageComponent },

      { path: 'info', component: InfoComponent },
    ]),
  ],
}).catch((err) => console.error(err));
