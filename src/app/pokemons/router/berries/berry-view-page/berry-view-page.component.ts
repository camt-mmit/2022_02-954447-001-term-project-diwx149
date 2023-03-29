import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BerryViewComponent } from 'src/app/pokemons/berries/berry-view/berry-view.component';
import { Observable, switchMap } from 'rxjs';
import { Berry } from 'src/app/pokemons/models';
import { ActivatedRoute, Router } from '@angular/router';
import { BerriesService } from 'src/app/services/berries.service';

@Component({
  selector: 'app-berry-view-page',
  standalone: true,
  imports: [CommonModule, BerryViewComponent],
  templateUrl: './berry-view-page.component.html',
  styleUrls: ['./berry-view-page.component.scss'],
})
export class BerryViewPageComponent {
  protected readonly data$: Observable<Berry>;
  constructor(
    private readonly dataService: BerriesService,
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
