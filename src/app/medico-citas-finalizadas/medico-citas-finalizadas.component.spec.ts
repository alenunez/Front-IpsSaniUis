import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoCitasFinalizadasComponent } from './medico-citas-finalizadas.component';

describe('MedicoCitasFinalizadasComponent', () => {
  let component: MedicoCitasFinalizadasComponent;
  let fixture: ComponentFixture<MedicoCitasFinalizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoCitasFinalizadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicoCitasFinalizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
