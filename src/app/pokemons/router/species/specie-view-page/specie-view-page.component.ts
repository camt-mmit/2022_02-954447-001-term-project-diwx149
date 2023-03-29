import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecieViewComponent } from 'src/app/pokemons/species/specie-view/specie-view.component';
import { SpeciesService } from 'src/app/services/species.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Specie } from 'src/app/pokemons/models';

@Component({
  selector: 'app-specie-view-page',
  standalone: true,
  imports: [CommonModule, SpecieViewComponent],
  templateUrl: './specie-view-page.component.html',
  styleUrls: ['./specie-view-page.component.scss'],
})
export class SpecieViewPageComponent {
  protected readonly data$: Observable<Specie>;
  constructor(
    private readonly dataService: SpeciesService,
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
