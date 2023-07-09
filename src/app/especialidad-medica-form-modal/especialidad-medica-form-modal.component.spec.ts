import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadMedicaFormModalComponent } from './especialidad-medica-form-modal.component';

describe('EspecialidadMedicaFormModalComponent', () => {
  let component: EspecialidadMedicaFormModalComponent;
  let fixture: ComponentFixture<EspecialidadMedicaFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadMedicaFormModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialidadMedicaFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
