import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryViewPageComponent } from './berry-view-page.component';

describe('BerryViewPageComponent', () => {
  let component: BerryViewPageComponent;
  let fixture: ComponentFixture<BerryViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BerryViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BerryViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
