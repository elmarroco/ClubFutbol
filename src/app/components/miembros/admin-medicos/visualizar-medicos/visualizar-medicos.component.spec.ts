import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarMedicosComponent } from './visualizar-medicos.component';

describe('VisualizarMedicosComponent', () => {
  let component: VisualizarMedicosComponent;
  let fixture: ComponentFixture<VisualizarMedicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarMedicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
