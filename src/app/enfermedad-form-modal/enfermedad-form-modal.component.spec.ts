import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermedadFormModalComponent } from './enfermedad-form-modal.component';

describe('EnfermedadFormModalComponent', () => {
  let component: EnfermedadFormModalComponent;
  let fixture: ComponentFixture<EnfermedadFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfermedadFormModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnfermedadFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
