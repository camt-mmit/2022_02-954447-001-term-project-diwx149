import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoketypeViewComponent } from 'src/app/pokemons/poketypes/poketype-view/poketype-view.component';
import { PokeType } from 'src/app/pokemons/models';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PoketypesService } from 'src/app/services/poketypes.service';

@Component({
  selector: 'app-poketype-view-page',
  standalone: true,
  imports: [CommonModule, PoketypeViewComponent],
  templateUrl: './poketype-view-page.component.html',
  styleUrls: ['./poketype-view-page.component.scss'],
})
export class PoketypeViewPageComponent {
  protected readonly data$: Observable<PokeType>;
  constructor(
    private readonly dataService: PoketypesService,
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
