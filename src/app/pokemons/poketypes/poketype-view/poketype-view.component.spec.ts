import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoketypeViewComponent } from './poketype-view.component';

describe('PoketypeViewComponent', () => {
  let component: PoketypeViewComponent;
  let fixture: ComponentFixture<PoketypeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PoketypeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoketypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
