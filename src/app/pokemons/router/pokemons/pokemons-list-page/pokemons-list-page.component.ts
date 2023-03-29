import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsListComponent } from 'src/app/pokemons/pokemons/pokemons-list/pokemons-list.component';
import { List, Pokemon, SearchData } from 'src/app/pokemons/models';
import { Observable, switchMap, filter, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons-list-page',
  standalone: true,
  imports: [CommonModule, PokemonsListComponent],
  templateUrl: './pokemons-list-page.component.html',
  styleUrls: ['./pokemons-list-page.component.scss'],
})
export class PokemonsListPageComponent {
  protected readonly data$: Observable<List<Pokemon>>;
  // protected dataFiltered$: Observable<List<Pokemon>>;

  protected searchData: SearchData;

  constructor(
    dataService: PokemonsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    //this.data$ = dataService.getAll({ page: '3' });
    this.searchData = route.snapshot.queryParams;
    this.data$ = route.queryParams.pipe(
      switchMap((params) => dataService.getAll(params))
    );

    // this.dataFiltered$ = this.data$;
  }

  protected search(searchData: SearchData): void {
    this.router.navigate([], {
      queryParams: searchData,
    });

    // this.dataFiltered$ = this.data$.pipe(
    //   map((pokemons) => ({
    //     ...pokemons,
    //     results: pokemons.results.filter((pokemon) =>
    //       pokemon.name.toLowerCase().includes(searchData.search!.toLowerCase())
    //     ),
    //   }))
    // );
  }
  onItemSelect(item: Pokemon): void {
    const paths = item.url!.pathname.split('/');
    const id = paths[paths.length - 2];
    this.router.navigate([id], { relativeTo: this.route });
  }
}
