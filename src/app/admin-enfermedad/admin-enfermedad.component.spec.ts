import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEnfermedadComponent } from './admin-enfermedad.component';

describe('AdminEnfermedadComponent', () => {
  let component: AdminEnfermedadComponent;
  let fixture: ComponentFixture<AdminEnfermedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEnfermedadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEnfermedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
