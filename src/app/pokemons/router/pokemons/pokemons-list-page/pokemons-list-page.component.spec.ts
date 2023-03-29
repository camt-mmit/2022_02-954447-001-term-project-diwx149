import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsListPageComponent } from './pokemons-list-page.component';

describe('PokemonsListPageComponent', () => {
  let component: PokemonsListPageComponent;
  let fixture: ComponentFixture<PokemonsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PokemonsListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
