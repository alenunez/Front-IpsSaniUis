import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaMedicamentoFormModalComponent } from './marca-medicamento-form-modal.component';

describe('MarcaMedicamentoFormModalComponent', () => {
  let component: MarcaMedicamentoFormModalComponent;
  let fixture: ComponentFixture<MarcaMedicamentoFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaMedicamentoFormModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaMedicamentoFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
