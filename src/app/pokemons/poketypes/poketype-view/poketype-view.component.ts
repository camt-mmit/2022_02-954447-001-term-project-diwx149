import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeType } from '../../models';

@Component({
  selector: 'app-poketype-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poketype-view.component.html',
  styleUrls: ['./poketype-view.component.scss'],
})
export class PoketypeViewComponent implements OnInit {
  @Input() data!: PokeType;
  ngOnInit(): void {
    if (!this.data) {
      throw new Error(`Probperty 'data' is required!`);
    }
  }
}
