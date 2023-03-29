import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerriesListPageComponent } from './berries-list-page.component';

describe('BerriesListPageComponent', () => {
  let component: BerriesListPageComponent;
  let fixture: ComponentFixture<BerriesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BerriesListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BerriesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
