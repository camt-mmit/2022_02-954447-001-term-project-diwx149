import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityViewComponent } from './ability-view.component';

describe('AbilityViewComponent', () => {
  let component: AbilityViewComponent;
  let fixture: ComponentFixture<AbilityViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AbilityViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
