import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarNutriologosComponent } from './visualizar-nutriologos.component';

describe('VisualizarNutriologosComponent', () => {
  let component: VisualizarNutriologosComponent;
  let fixture: ComponentFixture<VisualizarNutriologosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarNutriologosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarNutriologosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
