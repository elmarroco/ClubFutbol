import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarJugadorComponent } from './agregar-jugador.component';

describe('AgregarJugadorComponent', () => {
  let component: AgregarJugadorComponent;
  let fixture: ComponentFixture<AgregarJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
