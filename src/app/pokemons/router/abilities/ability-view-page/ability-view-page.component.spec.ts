import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityViewPageComponent } from './ability-view-page.component';

describe('AbilityViewPageComponent', () => {
  let component: AbilityViewPageComponent;
  let fixture: ComponentFixture<AbilityViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AbilityViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilityViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
