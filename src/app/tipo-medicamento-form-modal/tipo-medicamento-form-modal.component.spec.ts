import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMedicamentoFormModalComponent } from './tipo-medicamento-form-modal.component';

describe('TipoMedicamentoFormModalComponent', () => {
  let component: TipoMedicamentoFormModalComponent;
  let fixture: ComponentFixture<TipoMedicamentoFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoMedicamentoFormModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoMedicamentoFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
