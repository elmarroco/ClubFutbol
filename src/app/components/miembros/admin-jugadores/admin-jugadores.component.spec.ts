import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJugadoresComponent } from './admin-jugadores.component';

describe('AdminJugadoresComponent', () => {
  let component: AdminJugadoresComponent;
  let fixture: ComponentFixture<AdminJugadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminJugadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
