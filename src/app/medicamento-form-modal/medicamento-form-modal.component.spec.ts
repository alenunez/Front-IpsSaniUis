import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoFormModalComponent } from './medicamento-form-modal.component';

describe('MedicamentoFormModalComponent', () => {
  let component: MedicamentoFormModalComponent;
  let fixture: ComponentFixture<MedicamentoFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicamentoFormModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicamentoFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
