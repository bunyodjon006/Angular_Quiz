import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found3Component } from './found3.component';

describe('Found3Component', () => {
  let component: Found3Component;
  let fixture: ComponentFixture<Found3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found3Component]
    });
    fixture = TestBed.createComponent(Found3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
