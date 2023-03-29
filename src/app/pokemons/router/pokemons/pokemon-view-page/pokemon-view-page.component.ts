import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonViewComponent } from 'src/app/pokemons/pokemons/pokemon-view/pokemon-view.component';
import { Pokemon } from 'src/app/pokemons/models';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon-view-page',
  standalone: true,
  imports: [CommonModule, PokemonViewComponent],
  templateUrl: './pokemon-view-page.component.html',
  styleUrls: ['./pokemon-view-page.component.scss'],
})
export class PokemonViewPageComponent {
  protected readonly data$: Observable<Pokemon>;
  constructor(
    private readonly dataService: PokemonsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.data$ = this.route.params.pipe(
      switchMap((params) => this.dataService.get(params['id']))
    );
  }
  back(): void {
    history.back();
  }
}
