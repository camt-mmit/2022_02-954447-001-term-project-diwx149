import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonViewPageComponent } from './pokemon-view-page.component';

describe('PokemonViewPageComponent', () => {
  let component: PokemonViewPageComponent;
  let fixture: ComponentFixture<PokemonViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PokemonViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
