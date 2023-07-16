import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEspecialidadComponent } from './admin-especialidad.component';

describe('AdminEspecialidadComponent', () => {
  let component: AdminEspecialidadComponent;
  let fixture: ComponentFixture<AdminEspecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEspecialidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
