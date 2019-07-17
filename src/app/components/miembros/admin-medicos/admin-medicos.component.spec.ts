import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMedicosComponent } from './admin-medicos.component';

describe('AdminMedicosComponent', () => {
  let component: AdminMedicosComponent;
  let fixture: ComponentFixture<AdminMedicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMedicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
