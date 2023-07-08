import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaFormModalComponent } from './cita-form-modal.component';

describe('CitaFormModalComponent', () => {
  let component: CitaFormModalComponent;
  let fixture: ComponentFixture<CitaFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaFormModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
