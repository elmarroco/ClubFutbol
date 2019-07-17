import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarNutriologoComponent } from './eliminar-nutriologo.component';

describe('EliminarNutriologoComponent', () => {
  let component: EliminarNutriologoComponent;
  let fixture: ComponentFixture<EliminarNutriologoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarNutriologoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarNutriologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
