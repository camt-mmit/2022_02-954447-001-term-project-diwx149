import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoketypesListComponent } from 'src/app/pokemons/poketypes/poketypes-list/poketypes-list.component';
import { Observable, switchMap } from 'rxjs';
import { List, PokeType, SearchData } from 'src/app/pokemons/models';
import { ActivatedRoute, Router } from '@angular/router';
import { PoketypesService } from 'src/app/services/poketypes.service';

@Component({
  selector: 'app-poketypes-list-page',
  standalone: true,
  imports: [CommonModule, PoketypesListComponent],
  templateUrl: './poketypes-list-page.component.html',
  styleUrls: ['./poketypes-list-page.component.scss'],
})
export class PoketypesListPageComponent {
  protected readonly data$: Observable<List<PokeType>>;

  protected searchData: SearchData;

  constructor(
    dataService: PoketypesService,
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
  onItemSelect(item: PokeType): void {
    const paths = item.url!.pathname.split('/');
    const id = paths[paths.length - 2];
    this.router.navigate([id], { relativeTo: this.route });
  }
}
