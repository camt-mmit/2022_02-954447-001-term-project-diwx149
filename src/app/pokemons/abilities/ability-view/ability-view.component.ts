import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ability } from '../../models';

@Component({
  selector: 'app-ability-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ability-view.component.html',
  styleUrls: ['./ability-view.component.scss'],
})
export class AbilityViewComponent implements OnInit {
  @Input() data!: Ability;
  ngOnInit(): void {
    if (!this.data) {
      throw new Error(`Probperty 'data' is required!`);
    }
  }
}
