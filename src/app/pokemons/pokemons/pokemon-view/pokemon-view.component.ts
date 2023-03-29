import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../models';

@Component({
  selector: 'app-pokemon-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.scss'],
})
export class PokemonViewComponent implements OnInit {
  @Input() data!: Pokemon;
  ngOnInit(): void {
    if (!this.data) {
      throw new Error(`Probperty 'data' is required!`);
    }
  }
}
