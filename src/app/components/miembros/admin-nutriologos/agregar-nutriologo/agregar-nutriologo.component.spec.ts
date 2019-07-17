import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarNutriologoComponent } from './agregar-nutriologo.component';

describe('AgregarNutriologoComponent', () => {
  let component: AgregarNutriologoComponent;
  let fixture: ComponentFixture<AgregarNutriologoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarNutriologoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarNutriologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
