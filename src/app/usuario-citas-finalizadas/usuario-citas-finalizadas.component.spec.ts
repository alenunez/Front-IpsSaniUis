import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCitasFinalizadasComponent } from './usuario-citas-finalizadas.component';

describe('UsuarioCitasFinalizadasComponent', () => {
  let component: UsuarioCitasFinalizadasComponent;
  let fixture: ComponentFixture<UsuarioCitasFinalizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioCitasFinalizadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioCitasFinalizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
