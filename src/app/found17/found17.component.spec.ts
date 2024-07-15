import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found17Component } from './found17.component';

describe('Found17Component', () => {
  let component: Found17Component;
  let fixture: ComponentFixture<Found17Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found17Component]
    });
    fixture = TestBed.createComponent(Found17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
