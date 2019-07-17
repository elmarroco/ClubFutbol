import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNutriologosComponent } from './admin-nutriologos.component';

describe('AdminNutriologosComponent', () => {
  let component: AdminNutriologosComponent;
  let fixture: ComponentFixture<AdminNutriologosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNutriologosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNutriologosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
