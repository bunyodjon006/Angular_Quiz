import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found8Component } from './found8.component';

describe('Found8Component', () => {
  let component: Found8Component;
  let fixture: ComponentFixture<Found8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found8Component]
    });
    fixture = TestBed.createComponent(Found8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
