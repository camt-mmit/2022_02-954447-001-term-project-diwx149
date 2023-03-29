import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoketypesListPageComponent } from './poketypes-list-page.component';

describe('PoketypesListPageComponent', () => {
  let component: PoketypesListPageComponent;
  let fixture: ComponentFixture<PoketypesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PoketypesListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoketypesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
