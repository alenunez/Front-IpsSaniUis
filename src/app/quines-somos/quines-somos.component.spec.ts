import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinesSomosComponent } from './quines-somos.component';

describe('QuinesSomosComponent', () => {
  let component: QuinesSomosComponent;
  let fixture: ComponentFixture<QuinesSomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuinesSomosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuinesSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
