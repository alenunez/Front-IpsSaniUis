import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCitasComponent } from './usuario-citas.component';

describe('UsuarioCitasComponent', () => {
  let component: UsuarioCitasComponent;
  let fixture: ComponentFixture<UsuarioCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioCitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
