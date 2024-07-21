import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found32Component } from './found32.component';

describe('Found32Component', () => {
  let component: Found32Component;
  let fixture: ComponentFixture<Found32Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found32Component]
    });
    fixture = TestBed.createComponent(Found32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
