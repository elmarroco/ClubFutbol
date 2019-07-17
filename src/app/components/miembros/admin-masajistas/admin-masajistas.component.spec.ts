import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMasajistasComponent } from './admin-masajistas.component';

describe('AdminMasajistasComponent', () => {
  let component: AdminMasajistasComponent;
  let fixture: ComponentFixture<AdminMasajistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMasajistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMasajistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
