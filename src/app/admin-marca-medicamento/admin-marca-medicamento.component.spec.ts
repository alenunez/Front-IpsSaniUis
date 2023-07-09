import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMarcaMedicamentoComponent } from './admin-marca-medicamento.component';

describe('AdminMarcaMedicamentoComponent', () => {
  let component: AdminMarcaMedicamentoComponent;
  let fixture: ComponentFixture<AdminMarcaMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMarcaMedicamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMarcaMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
