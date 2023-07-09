import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMedicamentoComponent } from './admin-medicamento.component';

describe('AdminMedicamentoComponent', () => {
  let component: AdminMedicamentoComponent;
  let fixture: ComponentFixture<AdminMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMedicamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
