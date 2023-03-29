import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesListPageComponent } from './abilities-list-page.component';

describe('AbilitiesListPageComponent', () => {
  let component: AbilitiesListPageComponent;
  let fixture: ComponentFixture<AbilitiesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AbilitiesListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilitiesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
