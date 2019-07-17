import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMasajistaComponent } from './eliminar-masajista.component';

describe('EliminarMasajistaComponent', () => {
  let component: EliminarMasajistaComponent;
  let fixture: ComponentFixture<EliminarMasajistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarMasajistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarMasajistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
