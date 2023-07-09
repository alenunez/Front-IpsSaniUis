import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTipoMedicamentoComponent } from './admin-tipo-medicamento.component';

describe('AdminTipoMedicamentoComponent', () => {
  let component: AdminTipoMedicamentoComponent;
  let fixture: ComponentFixture<AdminTipoMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTipoMedicamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTipoMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
