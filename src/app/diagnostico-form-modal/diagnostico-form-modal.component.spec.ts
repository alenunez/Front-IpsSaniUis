import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticoFormModalComponent } from './diagnostico-form-modal.component';

describe('DiagnosticoFormModalComponent', () => {
  let component: DiagnosticoFormModalComponent;
  let fixture: ComponentFixture<DiagnosticoFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticoFormModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosticoFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
