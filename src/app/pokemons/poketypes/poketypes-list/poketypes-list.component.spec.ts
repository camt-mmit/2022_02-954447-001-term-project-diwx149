import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoketypesListComponent } from './poketypes-list.component';

describe('PoketypesListComponent', () => {
  let component: PoketypesListComponent;
  let fixture: ComponentFixture<PoketypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PoketypesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoketypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
