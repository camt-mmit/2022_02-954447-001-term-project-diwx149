import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoketypeViewPageComponent } from './poketype-view-page.component';

describe('PoketypeViewPageComponent', () => {
  let component: PoketypeViewPageComponent;
  let fixture: ComponentFixture<PoketypeViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PoketypeViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoketypeViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
