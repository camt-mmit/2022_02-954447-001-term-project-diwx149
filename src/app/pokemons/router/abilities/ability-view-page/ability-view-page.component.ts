import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilityViewComponent } from 'src/app/pokemons/abilities/ability-view/ability-view.component';
import { Ability } from 'src/app/pokemons/models';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AbilitiesService } from 'src/app/services/abilities.service';

@Component({
  selector: 'app-ability-view-page',
  standalone: true,
  imports: [CommonModule, AbilityViewComponent],
  templateUrl: './ability-view-page.component.html',
  styleUrls: ['./ability-view-page.component.scss'],
})
export class AbilityViewPageComponent {
  protected readonly data$: Observable<Ability>;
  constructor(
    private readonly dataService: AbilitiesService,
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
