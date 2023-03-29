import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesListComponent } from 'src/app/pokemons/species/species-list/species-list.component';
import { List, SearchData, Specie } from 'src/app/pokemons/models';
import { Observable, switchMap } from 'rxjs';
import { SpeciesService } from 'src/app/services/species.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-species-list-page',
  standalone: true,
  imports: [CommonModule, SpeciesListComponent],
  templateUrl: './species-list-page.component.html',
  styleUrls: ['./species-list-page.component.scss'],
})
export class SpeciesListPageComponent {
  protected readonly data$: Observable<List<Specie>>;

  protected searchData: SearchData;

  constructor(
    dataService: SpeciesService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    //this.data$ = dataService.getAll({ page: '3' });
    this.searchData = route.snapshot.queryParams;
    this.data$ = route.queryParams.pipe(
      switchMap((params) => dataService.getAll(params))
    );
  }

  protected search(searchData: SearchData): void {
    this.router.navigate([], {
      queryParams: searchData,
    });
  }
  onItemSelect(item: Specie): void {
    const paths = item.url!.pathname.split('/');
    const id = paths[paths.length - 2];
    this.router.navigate([id], { relativeTo: this.route });
  }
}
