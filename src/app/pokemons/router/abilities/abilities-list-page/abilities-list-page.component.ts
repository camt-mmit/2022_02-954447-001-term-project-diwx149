import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilitiesListComponent } from 'src/app/pokemons/abilities/abilities-list/abilities-list.component';
import { Observable, switchMap } from 'rxjs';
import { Ability, List, SearchData } from 'src/app/pokemons/models';
import { ActivatedRoute, Router } from '@angular/router';
import { AbilitiesService } from 'src/app/services/abilities.service';

@Component({
  selector: 'app-abilities-list-page',
  standalone: true,
  imports: [CommonModule, AbilitiesListComponent],
  templateUrl: './abilities-list-page.component.html',
  styleUrls: ['./abilities-list-page.component.scss'],
})
export class AbilitiesListPageComponent {
  protected readonly data$: Observable<List<Ability>>;

  protected searchData: SearchData;

  constructor(
    dataService: AbilitiesService,
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
      // replaceUrl: true,
      queryParams: searchData,
    });
  }
  onItemSelect(item: Ability): void {
    const paths = item.url!.pathname.split('/');
    const id = paths[paths.length - 2];
    this.router.navigate([id], { relativeTo: this.route });
  }
}
