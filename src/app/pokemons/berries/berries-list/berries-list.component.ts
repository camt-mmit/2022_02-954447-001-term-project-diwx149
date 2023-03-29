import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { Berry, List, SearchData } from '../../models';

@Component({
  selector: 'app-berries-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './berries-list.component.html',
  styleUrls: ['./berries-list.component.scss'],
})
export class BerriesListComponent implements OnInit {
  @Input() data!: List<Berry>;
  @Input() search?: SearchData;
  @Output() searchChange = new EventEmitter<SearchData>();
  @Output() itemSelected = new EventEmitter<Berry>();

  protected formGroup!: FormGroup<{
    search: FormControl<string>;
  }>;

  private fb: NonNullableFormBuilder;
  public list: Berry[] = [];

  constructor(fb: FormBuilder, private location: Location) {
    this.fb = fb.nonNullable;
  }

  ngOnInit(): void {
    if (!this.data) {
      throw new Error(`Property 'data' is required!`);
    }

    this.formGroup = this.fb.group({
      search: this.search?.search ?? '',
    });
    this.list = this.data.results;
  }

  protected doSearch(): void {
    const value = this.formGroup.value;
    if (value.search) {
      const search = value.search?.toLowerCase();
      this.list = this.data.results.filter((result) =>
        result.name.toLowerCase().includes(search)
      );
      this.searchChange.emit(this.formGroup.value);
    } else {
      this.doClear();
    }
  }
  protected doClear(): void {
    this.formGroup.setValue({ search: '' });
    this.searchChange.emit({});
    this.location.historyGo();
  }

  protected page(searchParams?: URLSearchParams): void {
    const search = searchParams?.get('search');
    const offset = searchParams?.get('offset');
    const limit = '20';
    const searchData = searchParams
      ? {
          ...(search ? { search } : {}),
          ...(offset ? { offset } : {}),
          ...(limit ? { limit } : {}),
        }
      : {};

    this.searchChange.emit(searchData);
    window.location.assign(
      `./berries?offset=${searchData.offset}&limit=${searchData.limit}`
    );
  }
  protected select(item: Berry): void {
    this.itemSelected.emit(item);
  }
}
