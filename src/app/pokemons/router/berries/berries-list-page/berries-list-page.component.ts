import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BerriesListComponent } from 'src/app/pokemons/berries/berries-list/berries-list.component';
import { Berry, List, SearchData } from 'src/app/pokemons/models';
import { BerriesService } from 'src/app/services/berries.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-berries-list-page',
  standalone: true,
  imports: [CommonModule, BerriesListComponent],
  templateUrl: './berries-list-page.component.html',
  styleUrls: ['./berries-list-page.component.scss'],
})
export class BerriesListPageComponent {
  protected readonly data$: Observable<List<Berry>>;

  protected searchData: SearchData;

  constructor(
    dataService: BerriesService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
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
  onItemSelect(item: Berry): void {
    const paths = item.url!.pathname.split('/');
    const id = paths[paths.length - 2];
    this.router.navigate([id], { relativeTo: this.route });
  }
}
