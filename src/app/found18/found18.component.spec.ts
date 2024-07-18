import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found18Component } from './found18.component';

describe('Found18Component', () => {
  let component: Found18Component;
  let fixture: ComponentFixture<Found18Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found18Component]
    });
    fixture = TestBed.createComponent(Found18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
