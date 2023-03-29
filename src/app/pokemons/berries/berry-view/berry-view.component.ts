import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Berry } from '../../models';

@Component({
  selector: 'app-berry-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './berry-view.component.html',
  styleUrls: ['./berry-view.component.scss'],
})
export class BerryViewComponent implements OnInit {
  @Input() data!: Berry;
  ngOnInit(): void {
    if (!this.data) {
      throw new Error(`Probperty 'data' is required!`);
    }
  }
}
