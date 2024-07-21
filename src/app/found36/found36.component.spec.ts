import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Found36Component } from './found36.component';

describe('Found36Component', () => {
  let component: Found36Component;
  let fixture: ComponentFixture<Found36Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Found36Component]
    });
    fixture = TestBed.createComponent(Found36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
