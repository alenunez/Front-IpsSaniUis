import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoFormModalComponent } from './tratamiento-form-modal.component';

describe('TratamientoFormModalComponent', () => {
  let component: TratamientoFormModalComponent;
  let fixture: ComponentFixture<TratamientoFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TratamientoFormModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratamientoFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
