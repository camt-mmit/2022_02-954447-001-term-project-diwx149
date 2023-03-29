import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryViewComponent } from './berry-view.component';

describe('BerryViewComponent', () => {
  let component: BerryViewComponent;
  let fixture: ComponentFixture<BerryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BerryViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BerryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
